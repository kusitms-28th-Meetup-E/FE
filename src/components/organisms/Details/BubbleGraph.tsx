import React, { useEffect, useState } from "react";

import styled from "styled-components";

import Bubble from "@/components/molecules/bubble";
export const BubbleGraph = () => {
  const Month = [7, 8, 9, 10, 11, 12];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
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
      <div style={{ padding: "0 20px", display: "none" }}>
        {450 < windowWidth && windowWidth < 1080 ? (
          <div>
            <ExampleBubble>월별 키워드 분포를 확인하려면 크기를 확대하세요!</ExampleBubble>
            <ExampleBubble2>월별 키워드 분포를 확인하려면 크기를 확대하세요!</ExampleBubble2>
          </div>
        ) : (
          ""
        )}
        {450 > windowWidth ? (
          <div>
            <ExampleBubble>월별 키워드 분포를 확인하려면 PC버전을 이용하세요!</ExampleBubble>
            <ExampleBubble2>월별 키워드 분포를 확인하려면 PC버전을 이용하세요!</ExampleBubble2>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const ExampleBubble = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
  @media (max-width: 1080px) {
    display: block;
    background-color: red;
    padding-top: 80px;
    padding-bottom: 100px;
    margin: 0 auto;
    width: fit-content;
    display: flex;
    margin: 60px auto 0;
    color: var(--Gray7_600, #757575);
    font-size: var(--text_b3);
    width: fit-content;
    padding: 6px 12px;
    box-sizing: border-box;
    border-radius: 185px;
    background: var(--Gray3_200, #eee);
    line-height: 22px;
    text-align: center;
  }
  @media (max-width: 650px) {
    margin: 150px auto 10px;
  }
  @media (max-width: 480px) {
    margin: 250px auto 10px;
  }
`;
const ExampleBubble2 = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
  @media (max-width: 1080px) {
    display: block;
    background-color: red;
    padding-top: 80px;
    padding-bottom: 100px;
    margin: 0 auto;
    width: fit-content;
    display: flex;
    margin: 10px auto 30px;
    color: var(--Gray7_600, #757575);
    font-size: var(--text_b3);
    width: fit-content;
    padding: 6px 12px;
    box-sizing: border-box;
    border-radius: 185px;
    background: var(--Gray3_200, #eee);
    line-height: 22px;
    text-align: center;
  }
  @media (max-width: 650px) {
    margin: 0 auto 10px;
  }

  @media (max-width: 480px) {
    margin: 10px auto 30px;
  }
`;

const Container = styled.div`
  width: 100%; // 기본 100%  반응형 작업할 때 400Px로 잡기
  height: 521px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  padding-top: 80px;
  background-color: var(--Gray3_200);
  @media (max-width: 1080px) {
    zoom: 0.9;
  }
  @media (max-width: 960px) {
    zoom: 0.8;
  }
  @media (max-width: 850px) {
    margin-top: 46px;
    zoom: 0.7;
  }
  @media (max-width: 740px) {
    margin-top: 86px;
    zoom: 0.6;
  }
  @media (max-width: 650px) {
    margin-top: 166px;
    zoom: 0.5;
  }
  @media (max-width: 540px) {
    margin-top: 286px;
    zoom: 0.4;
  }
  @media (max-width: 450px) {
    margin-top: 456px;
    zoom: 0.35;
  }
  @media (max-width: 412px) {
    margin-top: 556px;
    zoom: 0.3;
  }

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
    font-size: 14px;
    width: fit-content;
    padding: 6px 12px;
    box-sizing: border-box;
    border-radius: 185px;
    background: var(--Gray3_200, #eee);
    line-height: 22px;
    @media (max-width: 650px) {
      margin: 128px auto 0;
    }
    @media (max-width: 540px) {
      margin: 158px auto 0;
    }
    @media (max-width: 412px) {
      margin: 208px auto 0;
    }
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
