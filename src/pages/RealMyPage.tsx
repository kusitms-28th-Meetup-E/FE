import { useState, useEffect } from "react";

import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

import {
  getMyLikeCommunityData,
  getMySubscribeData,
  getMyWriteCommunityData,
  postMyLikeContentsData,
} from "@/apis";
import { ResponsiveSideBox } from "@/components/molecules/responsiveSideBox";
import { MyContent } from "@/components/organisms/MyPage/MyContent";
import { MyPageTitle } from "@/components/organisms/MyPage/MyPageTitle";
import { MyPost } from "@/components/organisms/MyPage/MyPost";
import { MySideBox } from "@/components/organisms/MyPage/MySideBox";
import { MyStatus } from "@/components/organisms/MyPage/MyStatus";
import {
  myLikeContentsData,
  myLikeData,
  mySubscribeTopicData,
  myWriteData,
  selectedTabState,
} from "@/recoil/atoms";
import { SubscribeDataProps } from "@/types";

export const RealMyPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const selectedTab = useRecoilValue(selectedTabState);
  const [newNickname, setNewNickname] = useState("");

  // const [SubscribeData, setSubscribeData] = useRecoilState(mySubscribeTopicData);
  const [LikeData, setLikeData] = useRecoilState(myLikeData);
  const [LikeContents, setLikeContents] = useRecoilState(myLikeContentsData);
  const [WriteData, setWriteData] = useRecoilState(myWriteData);

  const [pf, setPf] = useState("");

  const setSubscribeData = useSetRecoilState<SubscribeDataProps[]>(mySubscribeTopicData);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const accessToken = window.localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken !== null) {
      getMySubscribeData(accessToken)
        .then((res) => {
          setNewNickname(res.data.data.nickname);
          setPf(res.data.data.profileImg);
          setSubscribeData(res.data.data.subscribeResList.slice(0, 3));
        })
        .catch((err) => {
          console.log(err);
        });

      //
      getMyLikeCommunityData(accessToken)
        .then((res) => {
          // console.log(res.data);
          setLikeData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });

      postMyLikeContentsData(accessToken)
        .then((res) => {
          // console.log(res.data);
          setLikeContents(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });

      getMyWriteCommunityData(accessToken)
        .then((res) => {
          setWriteData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [accessToken, setLikeContents, setLikeData, setSubscribeData, setWriteData]);

  return (
    <>
      {LikeData && LikeContents && WriteData && (
        <OutWrapper>
          <MyPageTitle />
          <RealMyPageContainer>
            {windowWidth > 1150 ? (
              <>
                <MySideBox
                  newNickname={newNickname}
                  profileImg={pf}
                />
                <MyStatus />
              </>
            ) : (
              <div className="responsive-box">
                <ResponsiveSideBox />
                {selectedTab === 0 && <MyPost />}
                {selectedTab === 1 && <MyContent />}
                {selectedTab === 2 && <MyPost />}
              </div>
            )}
          </RealMyPageContainer>
        </OutWrapper>
      )}
    </>
  );
};

export const OutWrapper = styled.div`
  width: 100%;
  background: var(--Gray3_200, #eee);
  margin: 0 auto;
`;

export const RealMyPageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 55px;
  width: 1080px;
  margin: 0 auto;
  padding: 40px 0px;

  @media (max-width: 1080px) {
    width: 90%;
  }

  .responsive-box {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 0 auto;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;
