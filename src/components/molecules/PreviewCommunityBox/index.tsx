import { useNavigate } from "react-router-dom";

import { CommentBorderButton, LikeBorderButton } from "@/components/atoms/button";
import { Profile } from "@/components/atoms/profile";
import { KeywordTag } from "@/components/atoms/tag";
import { CommunityItemProps } from "@/types";

import { CommunityDetailContainer } from "./style";

export const PreviewCommunityBox = ({ data }: { data: CommunityItemProps }) => {
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
    <>
      <CommunityDetailContainer>
        <div
          className="top-content"
          onClick={() => spaceToCommunity(data?.area, data?.id)}
        >
          <div className="profile-text-wrapper">
            <Profile
              nickname={data.nickname}
              date={data.date}
              profileImg={data.profileImg}
            />
            <div className="top-content-text">{data.communityText} </div>
          </div>
          <div className="top-second-wrapper">
            <div>
              <KeywordTag category={data.area}>{data.keyword}</KeywordTag>
            </div>
            <div className="button-wrapper">
              <LikeBorderButton
                likeCount={data.likeCount}
                initialLikeStatus={data.likeStatus}
              />
              <CommentBorderButton commentCount={data.commentCount} />
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <div>인용한 콘텐츠</div>
          <p dangerouslySetInnerHTML={{ __html: data.contentsTitle }}></p>
        </div>
      </CommunityDetailContainer>
    </>
  );
};
