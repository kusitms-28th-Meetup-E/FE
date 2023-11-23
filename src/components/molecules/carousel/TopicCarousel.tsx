import { useCallback, useRef } from "react";

import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrowButton, PrevArrowButton } from "@/components/atoms/button";
import { SlideItem } from "@/components/molecules/slideItem";
import { filteredDataSelector } from "@/recoil/atoms";
import { ArticleDataProps } from "@/types";

export const TopicCarousel = ({ data }: { data: ArticleDataProps[] }) => {
  const filteredData = useRecoilValue(filteredDataSelector);

  const maxSlidesToShow = Math.min(filteredData.length, 4);

  const SliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: maxSlidesToShow,
    slidesToScroll: 1,
    arrows: false,

    //반응형
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slickRef = useRef<Slider | null>(null);

  const prev = useCallback(() => slickRef.current?.slickPrev(), []);
  const next = useCallback(() => slickRef.current?.slickNext(), []);

  return (
    <CategorySlideWrapper>
      {" "}
      <StyledSlider
        {...SliderSetting}
        ref={slickRef}
      >
        {data?.map((data, idx) => (
          <SlideItemWrapper key={idx}>
            <SlideItem data={data} />
          </SlideItemWrapper>
        ))}
      </StyledSlider>
      <ArrowContainer>
        <PrevArrowButton onClick={prev} />
        <NextArrowButton onClick={next} />
      </ArrowContainer>
    </CategorySlideWrapper>
  );
};

const CategorySlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  justify-content: center;
  width: 1120px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    width: 80%;
  }
`;

const StyledSlider = styled(Slider)`
  width: 1080px;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 1400px) {
    width: 804px;
  }

  @media (max-width: 1030px) {
    width: 540px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const SlideItemWrapper = styled.div`
  display: flex;
`;

const ArrowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;
