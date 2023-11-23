import React from "react";

import styled from "styled-components";

import Bubble from "@/components/molecules/bubble";
export const BubbleGraph = () => {
  const Month = [7, 8, 9, 10, 11, 12];

  return (
    <Container>
      <BubbleTop>
        <div className="title">
          약 <p className="first">1024개의 기사 데이터</p>를 형태소 분석한 결과,{" "}
          <p className="second"> 5개의 주요 키워드</p>를 추출했어요
        </div>
      </BubbleTop>
      <Bubble />
      <BubbleBottom>
        {Month.map((item, idx) => (
          <React.Fragment key={idx}>
            <div>{item}월</div>
          </React.Fragment>
        ))}
      </BubbleBottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%; // 기본 100%  반응형 작업할 때 400Px로 잡기
  height: 521px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  padding-top: 80px;
  background-color: var(--Gray3_200);

  //위에 한줄소개 height 늘어나게 했을 때 대비해서 일단 작성해놓은 반응형
  @media (max-width: 650px) {
    padding-top: 150px;
  }

  @media (max-width: 500px) {
    padding-top: 200px;
  }
`;

const BubbleTop = styled.div`
  z-index: 11;
  width: 1080px; // 여기 반응형 작업 잘하기
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: transparent;
  .title {
    display: flex;
    margin: 48px auto 0;
    color: var(--Gray7_600, #757575);
    font-size: var(--text_b3);
    width: fit-content;
    padding: 6px 12px;
    box-sizing: border-box;
    border-radius: 185px;
    background: var(--Gray3_200, #eee);
    line-height: 22px;
  }
  .first {
    color: var(--Gray9_800, #424242);
    font-weight: 600;
    margin-left: 5px;
  }
  .second {
    color: var(--Main_Blue, #0084ff);
    font-weight: 600;
    margin-left: 5px;
  }

  /* @media (max-width: 650px) {
    padding-top: 150px;
  }

  @media (max-width: 500px) {
    padding-top: 200px;
  } */
`;

const BubbleBottom = styled.div`
  width: 1080px;
  height: 64px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: rgba(217, 217, 217, 0.4);
  display: flex;
  gap: 45px;
  color: var(--Gray8_700, #616161);
  line-height: 24px;
  justify-content: space-around;
  padding: 0 45px;
  box-sizing: border-box;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
