import { LikeBorderButton, QuotBorderButton } from "@/components/atoms/button";
import { ArticleItemProps } from "@/types";

import { SlideWrapper } from "./style";

export const SlideItem = ({ data }: { data: ArticleItemProps }) => {
  return (
    <SlideWrapper>
      <div className="slide-container">
        <div className="slide-image">
          <img
            src={data.image}
            alt="썸네일"
          />
        </div>
        <div className="slide-text">
          <div className="top-text">
            <div className="text-type">{data.type}</div>
            <div className="text-title">{data.title}</div>
          </div>
          <div className="last-text">
            <div className="text-date">{data.date}</div>
            {data.likeCount !== undefined || data.quotCount !== undefined ? (
              <div className="button-wrapper">
                {data.likeCount !== undefined && <LikeBorderButton likeCount={data.likeCount} />}
                {data.quotCount !== undefined && <QuotBorderButton quotCount={data.quotCount} />}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
