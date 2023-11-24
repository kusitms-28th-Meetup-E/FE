// import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { CommentButton, LikeButton } from "@/components/atoms/button";
import { Profile } from "@/components/atoms/profile";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { PopularCommunityState } from "@/recoil/atoms";

import { CommunityContainer } from "./style";

import "swiper/css";
// eslint-disable-next-line import/order
import { useNavigate } from "react-router-dom";

export const CommunityBox = () => {
  // const [margin, setMargin] = useState((window.innerWidth - 1080) * 0.49);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setMargin(window.innerWidth * 0.25 * 0.5);
  //   };

  //   // 이벤트 리스너 등록
  //   window.addEventListener("resize", handleResize);

  //   // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const communityData = useRecoilValue(PopularCommunityState);

  const navigate = useNavigate();

  const spaceToCommunity = (area: string, id: number) => {
    let topicId = 0;

    if (area === "일자리-노동") {
      topicId = 1;
    } else if (area === "주거-사회안전망") {
      topicId = 2;
    } else if (area === "환경") {
      topicId = 3;
    } else if (area === "교육") {
      topicId = 4;
    }

    navigate(`/detailcommunity/${topicId}/${id}`);
  };
  return (
    <TempContainer>
      <Swiper
        loop={false}
        spaceBetween={24}
        breakpoints={{
          300: {
            slidesPerView: 1,
            slidesOffsetBefore: 20,
            spaceBetween: 44,
          },
          450: {
            slidesPerView: 1.5,
            slidesOffsetBefore: 20,
            spaceBetween: 44,
          },
          540: {
            slidesPerView: 1.7,
            slidesOffsetBefore: 20,
            spaceBetween: 44,
          },
          638: {
            slidesPerView: 2,
            slidesOffsetBefore: 20,
            spaceBetween: 44,
          },
          820: {
            slidesPerView: 2.5,
            slidesOffsetBefore: 10,
            spaceBetween: 44,
          },
          1000: {
            slidesPerView: 3,
            slidesOffsetBefore: 10,
            spaceBetween: 44,
          },
          1080: {
            slidesPerView: 3,
            slidesOffsetBefore: 10,
            spaceBetween: 44,
          },
          1150: {
            slidesPerView: 3.3,
            slidesOffsetBefore: 20,
            spaceBetween: 44,
          },
          1220: {
            slidesPerView: 3.5,
            slidesOffsetBefore: 80,
            spaceBetween: 44,
          },
          1280: {
            slidesPerView: 3.5,
            slidesOffsetBefore: 110,
            spaceBetween: 44,
          },
          1340: {
            slidesPerView: 3.5,
            slidesOffsetBefore: 130,
            spaceBetween: 44,
          },
          1380: {
            slidesPerView: 4,
            slidesOffsetBefore: 150,
            spaceBetween: 44,
          },
          1420: {
            slidesPerView: 4,
            slidesOffsetBefore: 170,
            spaceBetween: 44,
          },
          1490: {
            slidesPerView: 4,
            slidesOffsetBefore: 200,
            spaceBetween: 44,
          },
          1550: {
            slidesPerView: 4,
            slidesOffsetBefore: 240,
            spaceBetween: 44,
          },
          1610: {
            slidesPerView: 4,
            slidesOffsetBefore: 260,
            spaceBetween: 44,
          },
          1650: {
            slidesPerView: 4.5,
            slidesOffsetBefore: 290,
            spaceBetween: 44,
          },
          1720: {
            slidesPerView: 5,
            spaceBetween: 44,
            slidesOffsetBefore: 310,
          },
        }}
      >
        {communityData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CommunityContainer>
              <div
                className="community-content"
                onClick={() => spaceToCommunity(item?.area, item?.id)}
              >
                <div className="community-tag-wrapper">
                  <TopicTag category={item.area} />
                  <KeywordTag category={item.area}>{item.subject}</KeywordTag>
                  <KeywordTag category={item.area}>{item.keyword}</KeywordTag>
                </div>
                <div className="content-wrapper">
                  <div className="content-text">{item.communityText}</div>
                  <div className="status-info">
                    <Profile
                      nickname={item.nickname}
                      profileImg={item.profileImg}
                      date={item.date}
                    />
                    <div className="content-review">
                      <LikeButton likeCount={item.likeCount} />
                      <CommentButton commentCount={item.commentCount} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="quotation">
                <div className="quot-title">인용한 콘텐츠</div>
                <div
                  className="quot-text"
                  dangerouslySetInnerHTML={{ __html: item ? item.contentsTitle : "<div></div>" }}
                ></div>
              </div>
            </CommunityContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </TempContainer>
  );
};

const TempContainer = styled.div`
  /* width: 1440px; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
