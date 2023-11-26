import { LikeBorderButton } from "@/components/atoms/button";
import { BigProfile } from "@/components/atoms/profile";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { CommunityItemProps } from "@/types";

import { CommunityPostContainer } from "./style";

export const DetailCommunityBox = ({ data }: { data: CommunityItemProps }) => {
  const contLen = String(data.contents).length;

  return (
    <CommunityPostContainer>
      <div className="top-post-wrapper">
        <BigProfile
          nickname={data.nickname}
          profileImg={data.profileImg}
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
          <KeywordTag category={data.area}>{data.subject}</KeywordTag>
          <KeywordTag category={data.area}>{data.keyword}</KeywordTag>
        </div>
        <div className="content-text">{data.communityText} </div>
      </div>
      <div
        className="content-quot"
        onClick={() => {
          if (contLen > 20) {
            console.log(contLen);
            window.open(`${data.contents}`);
          } else {
            window.open(`https://www.youtube.com/watch?v=${data.contents}`);
          }
        }}
      >
        <div className="quot-text">
          <p>인용한 콘텐츠</p>
          <div dangerouslySetInnerHTML={{ __html: data?.contentsTitle }}></div>
        </div>
        <img
          src={data.contentsUrl}
          alt=""
        />
      </div>
    </CommunityPostContainer>
  );
};
