import { useState } from "react";
import React from "react";

import { useRecoilValue } from "recoil";
import styled from "styled-components";

import arrow from "@/assets/bottom_arrow.svg";
import Line from "@/components/molecules/line";
import { detailTitleState, topDateState } from "@/recoil/atoms";
export const LineGraph = () => {
  const Month = [5, 6, 7, 8, 9, 10, 11];
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const topDate = useRecoilValue(topDateState);
  const detailTitleData = useRecoilValue(detailTitleState);
  return (
    <Container>
      <ToggleBox>
        <div className="title">
          <div className="first">{detailTitleData.title}</div>(은)는{" "}
          <div className="second">2023년 {topDate}</div> 가장 많이 검색됐어요.
        </div>
        <button
          className="toggleBtn"
          onClick={() => setShowGraph(!showGraph)}
        >
          <p>{showGraph ? "그래프 접기" : "그래프로 자세히 보기"}</p>
          <img
            className={showGraph ? "up" : ""}
            src={arrow}
            alt="Y"
          />
        </button>
      </ToggleBox>
      {/* {showGraph ? <ShowLineGraph></ShowLineGraph> : ""} */}
      <ShowLineGraph $showGraph={showGraph}>
        <Line showGraph={showGraph} />
        <LineBottom>
          {Month.map((item, idx) => (
            <React.Fragment key={idx}>
              <div>{item}월</div>
            </React.Fragment>
          ))}
        </LineBottom>
      </ShowLineGraph>
    </Container>
  );
};

const Container = styled.div`
  width: 100%; // 기본 100%  반응형 작업할 때 400Px로 잡기
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: var(--Gray3_200);
  @media (max-width: 1080px) {
    zoom: 0.9;
  }
  @media (max-width: 960px) {
    zoom: 0.8;
  }
  @media (max-width: 850px) {
    zoom: 0.7;
  }
  @media (max-width: 740px) {
    zoom: 0.6;
  }
  @media (max-width: 650px) {
    zoom: 0.5;
  }
  @media (max-width: 540px) {
    zoom: 0.4;
  }
  @media (max-width: 412px) {
    zoom: 0.3;
  }
`;
const ToggleBox = styled.div`
  width: 1080px;
  height: 78px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 27px;
  box-sizing: border-box;
  background: var(--Gray1_50, #fafafa);

  .title {
    color: var(--Gray7_600, #757575);
    font-size: var(--text_h6);
    line-height: 28px;
    display: flex;
  }
  .title .first {
    color: var(--Gray10_900, #212121);
    font-weight: 700;
  }
  .title .second {
    color: var(--Main_Blue, #0084ff);
    font-weight: 600;
    margin: 0 5px;
  }

  .up {
    transform: rotate(180deg);
  }

  button {
    border: none;
    border-radius: 55px;
    background: var(--Gray3_200, #eee);
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
`;

const ShowLineGraph = styled.div<{ $showGraph: boolean }>`
  position: relative;
  width: 1080px;
  visibility: ${(props) => (!props.$showGraph ? "hidden" : "visible")};
  height: ${(props) => (!props.$showGraph ? "0" : "270px")};
  transition: height 1s;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: var(--Gray1_50, #fafafa);
`;

const LineBottom = styled.div`
  width: 1080px;
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: var(--Gray8_700, #616161);
  line-height: 24px;
  justify-content: space-around;
  padding: 0 55px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  gap: 50px;
`;
