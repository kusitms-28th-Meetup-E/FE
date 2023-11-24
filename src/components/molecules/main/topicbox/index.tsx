import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { TopicTag } from "@/components/atoms/tag";
import { SubjectProps } from "@/types";

import { TopicContainer } from "./style";

export const TopicBox = ({ title, imgUrl, subscribeCount, category }: SubjectProps) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${imgUrl})`,
    backgroundSize: "cover",
  };

  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };
  const navigate = useNavigate();
  const spaceToDetail = (title: string) => {
    const name = encodeURI(encodeURIComponent(title));
    navigate(`/detail/${name}`);
    window.scrollTo({ top: 0 });
  };

  // const spaceToDetailPage = (subTitle: string) => {
  //   console.log(subTitle); // 주제별 상세페이지로 이동 로직
  //   const name = encodeURI(encodeURIComponent(subTitle));
  //   navigate(`/detail/${name}`);
  // };
  return (
    <TopicContainer
      style={containerStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHover ? (
        <img
          className="img-hover"
          src={imgUrl}
          alt="미안"
          onClick={() => spaceToDetail(title)}
        />
      ) : (
        <div className="topic-wrapper">
          {" "}
          <div>
            {/* 아래 색깔 추후 데이터 카테고리에 맞게 지정 */}
            <TopicTag category={category} />
            <div className="topic-title">{title}</div>
          </div>
          <div className="subscribe">
            <p>{subscribeCount}명</p>이 구독하고 있어요
          </div>
        </div>
      )}
    </TopicContainer>
  );
};
