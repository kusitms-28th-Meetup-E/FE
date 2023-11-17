import { LikeBorderButton, QuotBorderButton } from "@/components/atoms/button";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { CommunityItemProps } from "@/types";

import { CommunityMainContainer } from "./style";

export const MainCommunityBox = ({ data }: { data: CommunityItemProps }) => {
  return (
    <CommunityMainContainer>
      <div className="top-wrapper">
        <div className="content-category">
          <TopicTag category={data.area} />
          {/* <KeywordTag category={data.} /> */}
          <KeywordTag category={data.keyword} />
        </div>
        <div className="content-text">{data.communityText}</div>
      </div>
      <div className="content-quot">
        <div className="quot-text">
          <p>인용한 콘텐츠</p>
          <div>{data.quotText}</div>
        </div>
        <img
          src="https://images.chosun.com/resizer/XKL6ePOdAuAn81yF-ZBOY8VyQWs=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/JMI3RCEB2Y7QSIUWJKT2MT7CC4.jpg"
          alt=""
        />
      </div>
      <div className="content-button">
        <LikeBorderButton
          likeCount={data.likeCount}
          initialLikeStatus={data.likeStatus}
        />
        <QuotBorderButton quotCount={data.commentCount} />
      </div>
    </CommunityMainContainer>
  );
};
