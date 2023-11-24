import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { getDetailCommunity } from "@/apis";
import { SeeMore } from "@/components/atoms/more";
import { PreviewCommunityBox } from "@/components/molecules/PreviewCommunityBox";
import { areaState } from "@/recoil/atoms";

export const CommunityPreview = () => {
  const { id } = useParams();
  const area = useRecoilValue(areaState);

  const name = decodeURI(decodeURIComponent(id || ""));
  const [similiarData, setSimilarData] = useState([]);

  useEffect(() => {
    getDetailCommunity(name)
      .then((res) => {
        setSimilarData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);
  return (
    <Container $area={area}>
      <div className="PreviewTop">
        <div className="keyword-text">
          <div className="title-top">
            <p>{name}</p> 에 대해
          </div>
          <div>이렇게 말하고 있어요</div>
        </div>
        <div className="more">
          <SeeMore
            text="더보기"
            path="/community"
          />
        </div>
      </div>
      <CommunityDetailWrapper>
        <div className="scrollInner">
          {similiarData?.map((item, idx) => (
            <PreviewCommunityBox
              key={idx}
              data={item}
            />
          ))}
        </div>
      </CommunityDetailWrapper>
      <div className="opacityBg"></div>
    </Container>
  );
};

export const Container = styled.div<{ $area: string }>`
  width: 710px;
  position: relative;
  .PreviewTop {
    display: flex;
    justify-content: space-between;
    margin-left: 24px;
    margin-bottom: 20px;
    position: relative;
    .more {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .keyword-text {
    /* width: 400px; */
    display: flex;
    flex-direction: column;
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;
    .title-top {
      display: flex;
    }

    p {
      font-weight: 700;
      color: inherit;
      line-height: inherit;
      letter-spacing: inherit;
      box-shadow: ${(props) =>
        props.$area === "환경"
          ? "inset 0 -9px 0 #1ae276;"
          : props.$area === "일자리·노동"
          ? "inset 0 -9px 0 #0084FF;"
          : props.$area === "교육"
          ? "inset 0 -9px 0 #FF9900;"
          : props.$area === "주거·사회 안전망"
          ? "inset 0 -9px 0 #7755FF;"
          : ""};
      margin-right: 5px;
    }
  }
  .opacityBg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    border-radius: 150px;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #d9d9d9 100%);
  }

  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const CommunityDetailWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  /* width: 710px; */
  width: 100%;
  height: 750px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d9d9d9;
  padding: 24px;
  box-sizing: border-box;
  .scrollInner {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
  }
  /* 숨겨진 스크롤바 스타일 */
  .scrollInner::-webkit-scrollbar {
    width: 0;
  }
`;
