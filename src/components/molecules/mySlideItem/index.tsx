import { useRecoilValue } from "recoil";

import { LikeBorderButton, QuotBorderButton } from "@/components/atoms/button";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { myLikeContentsData } from "@/recoil/atoms";
import { ContentsItemProps } from "@/types";

import { SlideWrapper } from "./style";
export const MySlideItem = ({ data }: { data: ContentsItemProps }) => {
  const contentData = useRecoilValue(myLikeContentsData);

  console.log("contentData:", contentData);

  return (
    <SlideWrapper onClick={() => window.open(data.url)}>
      <div className="slide-container">
        <div className="slide-image">
          <img
            src={data.imgUrl}
            alt="썸네일"
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
