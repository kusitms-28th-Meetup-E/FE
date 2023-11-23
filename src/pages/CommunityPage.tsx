import { useEffect, useState } from "react";

import styled from "styled-components";

import {
  getCommunityAllData,
  getCommunityAreaData,
  getCommunityTop5,
  getSubscribeTop5,
} from "@/apis";
import { CategoryBar } from "@/components/molecules/categoryBar";
import { CommunityMainList } from "@/components/organisms/Community/CommunityMainList";
import CommunityPopular from "@/components/organisms/Community/CommunityPopular";
import CommunityTitle from "@/components/organisms/Community/CommunityTitle";
import CommunityTopTopic from "@/components/organisms/Community/CommunityTopTopic";
import { EduData, envirData } from "@/dummy/AreaData";
// import { ToptopicData } from "@/dummy/ToptopicData";
import { CommunityItemProps, PopularCommunityProps, ToptopicProps } from "@/types";

export const CommunityPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [communityData, setCommunityData] = useState<CommunityItemProps[]>([]);
  const [topData, setTopData] = useState<ToptopicProps[]>([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [popularData, setPopularData] = useState<PopularCommunityProps[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getSubscribeTop5()
      .then((res) => {
        console.log("top5:", res.data);
        setTopData(res.data.data);
        console.log(topData);
      })
      .catch((err) => {
        // setTopData(ToptopicData);
        console.log(err);
      });

    getCommunityTop5()
      .then((res) => {
        console.log("top55:", res.data);
        setPopularData(res.data.data);
      })
      .catch((err) => console.log(err));

    switch (selectedTab) {
      case 0: // 전체 api 갖고와서 데이터 넣어주기
        getCommunityAllData()
          .then((res) => {
            console.log("전체:", res.data.data);
            setCommunityData(res.data.data);
          })
          .catch((err) => {
            setCommunityData(envirData);
            console.log(err);
          });

        break;
      case 1: // 일자리 · 노동
        getCommunityAreaData("일자리-노동")
          .then((res) => {
            console.log("일자리노동:", res.data);
            setCommunityData(res.data.data);
          })
          .catch((err) => {
            setCommunityData(envirData);
            console.log(err);
          });
        break;
      case 2: // 주거 · 사회 안전망
        getCommunityAreaData("주거-사회안전망")
          .then((res) => {
            // console.log("res:", res.data);
            setCommunityData(res.data.data);
          })
          .catch((err) => {
            setCommunityData(envirData);
            console.log(err);
          });
        break;
      case 3: // 환경
        getCommunityAreaData("환경")
          .then((res) => {
            console.log("res:", res.data);
            setCommunityData(res.data.data);
          })
          .catch((err) => {
            setCommunityData(envirData);
            console.log(err);
          });
        break;
      case 4: // 교육
        getCommunityAreaData("교육")
          .then((res) => {
            console.log("res:", res.data);
            setCommunityData(res.data.data);
          })
          .catch((err) => {
            setCommunityData(EduData);
            console.log(err);
          });
        break;
      default:
        break;
    }
  }, [selectedTab]);

  return (
    <>
      <CommunityTitle />
      <CategoryBar onSelectTab={setSelectedTab} />
      <Bottom>
        <div className="inner">
          {windowWidth > 1150 ? (
            <>
              <CommunityMainList data={communityData} />
              <div className="sideCommunity">
                <CommunityPopular data={popularData.slice(0, 5)} />
                <CommunityTopTopic data={topData} />
              </div>
            </>
          ) : (
            <div className="responsive-box">
              <div className="sideCommunity">
                <CommunityPopular data={popularData.slice(0, 2)} />
                <div className="topic-data-box">
                  <CommunityTopTopic data={topData.slice(0, 2)} />
                </div>
              </div>
              <CommunityMainList data={communityData} />
            </div>
          )}
        </div>
      </Bottom>
    </>
  );
};

export const Bottom = styled.div`
  width: 100%;
  background-color: var(--Gray3_200, #eee);

  .inner {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 152px;
    justify-content: space-between;

    @media (max-width: 1150px) {
      flex-direction: column;
      justify-content: center;
    }

    .responsive-box {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .sideCommunity {
      margin: 0 auto;

      .topic-data-box {
        @media (max-width: 1150px) {
          margin-top: 28px;
        }

        @media (max-width: 800px) {
          margin-top: 0px;
        }
      }

      @media (max-width: 1150px) {
        width: fit-content;
        justify-content: center;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 30px;
      }

      @media (max-width: 800px) {
        display: flex;
        gap: 0px;
        margin: 0 auto;
        flex-direction: column;
      }
    }
  }

  @media (max-width: 1150px) {
    display: flex;
    align-items: center;
  }
`;
