import { useState } from "react";

import nextIcon from "@/assets/nextIcon.svg";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { ContentDataProps } from "@/types";

import { ContentContainer, EdgeContainer, HoverContent } from "./style";

export const ContentBox = ({ data, category }: { data: ContentDataProps; category: string }) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(34, 34, 34, 0.2) 57.24%, rgba(34,34,34,0.95) 87.86%),url(${data.imgUrl})`,
    backgroundSize: "cover",
    // boxShadow: "0px 15px 34px 0px rgba(207, 207, 207, 0.1)",
  };

  const [hover, setHover] = useState<boolean>(false);

  const onClick = () => {
    window.open(`${data.link}`, "_blank");
  };

  return (
    <EdgeContainer
      onClick={onClick}
      style={{ position: "relative" }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <HoverContent $hover={hover}>
        <div className="article-text">{data.content}</div>
        <div className="article-img">
          <img
            src={nextIcon}
            alt=""
          />
        </div>
      </HoverContent>

      <ContentContainer
        style={containerStyle}
        $hover={hover}
      >
        <div className="tag-box">
          <div>
            <TopicTag category={category} />
          </div>
          <div>
            <KeywordTag category={category}>{data.keyword}</KeywordTag>
          </div>
        </div>
        <div className="text-box">
          <p>{data.type}</p>
          <div className="content-title">{data.title}</div>
        </div>
      </ContentContainer>
    </EdgeContainer>
  );
};
