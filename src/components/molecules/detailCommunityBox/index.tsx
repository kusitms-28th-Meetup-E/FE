import { LikeBorderButton } from "@/components/atoms/button";
import { BigProfile } from "@/components/atoms/profile";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { CommunityItemProps } from "@/types";

import { CommunityPostContainer } from "./style";

export const DetailCommunityBox = ({ data }: { data: CommunityItemProps }) => {
  return (
    <CommunityPostContainer>
      <div className="top-post-wrapper">
        <BigProfile
          nickname={data.nickname}
          date={data.date}
        />
        <LikeBorderButton
          likeCount={data.likeCount}
          initialLikeStatus={data.likeStatus}
        />
      </div>
      <div className="top-wrapper">
        <div className="content-category">
          <TopicTag category={data.area} />
          {/* <KeywordTag category={data.subject} /> */}
          <KeywordTag category={data.keyword} />
        </div>
        <div className="content-text">{data.communityText} </div>
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
    </CommunityPostContainer>
  );
};
