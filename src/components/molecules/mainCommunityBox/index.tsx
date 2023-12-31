import { useNavigate } from "react-router";

import { putLikeApi } from "@/apis";
import { CommentBorderButton, LikeBorderButton } from "@/components/atoms/button";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { CommunityItemProps } from "@/types";

import { CommunityMainContainer } from "./style";

export const MainCommunityBox = ({ data }: { data: CommunityItemProps }) => {
  let topicId = 0;
  const contLen = String(data.contents).length;

  if (data.area === "일자리-노동") {
    topicId = 1;
  } else if (data.area === "주거-사회안전망") {
    topicId = 2;
  } else if (data.area === "환경") {
    topicId = 3;
  } else if (data.area === "교육") {
    topicId = 4;
  }

  const navigate = useNavigate();

  const SpaceTo = (page: string) => {
    navigate(page);
  };

  const onClickLike = () => {
    putLikeApi(topicId, data.id, localStorage.accessToken)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CommunityMainContainer onClick={() => SpaceTo(`/detailcommunity/${topicId}/${data.id}`)}>
      <div className="top-wrapper">
        <div className="content-category">
          <TopicTag category={data.area} />
          <KeywordTag category={data.area}>{data.subject}</KeywordTag>
          <KeywordTag category={data.area}>{data.keyword}</KeywordTag>
        </div>
        <div className="content-text">{data.communityText}</div>
      </div>
      <div
        className="content-quot"
        onClick={(e) => {
          e.stopPropagation();
          if (contLen > 20) {
            window.open(`${data.contents}`);
          } else {
            window.open(`https://www.youtube.com/watch?v=${data.contents}`);
          }
        }}
      >
        <div className="quot-text">
          <p>인용한 콘텐츠</p>
          <div
            dangerouslySetInnerHTML={{ __html: data ? data.contentsTitle : "<div></div>" }}
          ></div>
        </div>
        <img
          src={data.contentsUrl}
          alt=""
        />
      </div>
      <div
        className="content-button"
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          onClickLike();
        }}
      >
        <LikeBorderButton
          likeCount={data.likeCount}
          initialLikeStatus={data.likeStatus}
        />
        <CommentBorderButton commentCount={data.commentCount} />
      </div>
    </CommunityMainContainer>
  );
};
