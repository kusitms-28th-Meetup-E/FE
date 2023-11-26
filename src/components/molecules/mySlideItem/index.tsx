import { LikeBorderButton, QuotBorderButton } from "@/components/atoms/button";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { ContentsItemProps } from "@/types";

import { SlideWrapper } from "./style";
export const MySlideItem = ({ data }: { data: ContentsItemProps }) => {
  return (
    <SlideWrapper onClick={() => window.open(`https://www.youtube.com/watch?v=${data?.url}`)}>
      <div className="slide-container">
        <div className="slide-image">
          <img
            src={data.imgUrl}
            alt="이미지가 없습니다"
          />
          <div className="topic-tag">
            <TopicTag category={data.topic} />
            <KeywordTag category={data.topic}>{data.issueTitle}</KeywordTag>
            <KeywordTag category={data.topic}>{data.keyword}</KeywordTag>
          </div>
        </div>
        <div className="slide-text">
          <div className="top-text">
            <div className="text-type">{data.type}</div>

            <div
              className="text-title"
              dangerouslySetInnerHTML={{ __html: data.title }}
            ></div>
          </div>
          <div className="last-text">
            <div className="text-date">{data.pubDate}</div>
            {data.likeCount !== undefined || data.quotCount !== undefined ? (
              <div className="button-wrapper">
                {data.likeCount !== undefined && (
                  <LikeBorderButton
                    likeCount={data.likeCount}
                    initialLikeStatus="true"
                  />
                )}
                {data.quotCount !== undefined && <QuotBorderButton />}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
