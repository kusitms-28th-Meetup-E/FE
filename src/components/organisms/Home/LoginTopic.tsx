import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SeeMore } from "@/components/atoms/more";
import { Title } from "@/components/atoms/title";
import { TopicCarousel } from "@/components/molecules/carousel/TopicCarousel";
import { CategoryFilter } from "@/components/molecules/categoryFilter";

export const LoginTopic = () => {
  return (
    <Background>
      <div className="inner">
        <Title title="나의 관심 주제" />
      </div>
      <div className="inner">
        <CategoryFilter />{" "}
      </div>
      <TopicCarousel />
      <div className="inner">
        <SeeMore
          text="관심 콘텐츠 더보기"
          path="/login"
        />
      </div>
    </Background>
  );
};

const Background = styled.div`
  background: var(--Gray2_100);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0px;

  .inner {
    width: 1080px;
    margin: 0 auto;

    @media (max-width: 1080px) {
      display: flex;
      width: 770px;
      justify-content: center;
    }
    @media (max-width: 880px) {
      width: 600px;
    }
    @media (max-width: 564px) {
      width: 300px;
    }
  }
`;