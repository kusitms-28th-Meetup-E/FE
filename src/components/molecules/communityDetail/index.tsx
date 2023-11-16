import { Profile } from "@/components/atoms/profile";
import { KeywordTag } from "@/components/atoms/tag";
import { CommunityPostProps } from "@/types";

import { CommunityDetailContainer } from "./style";

export const CommunityDetail = ({ data }: { data: CommunityPostProps }) => {
  return (
    <>
      <CommunityDetailContainer>
        <div className="top-content">
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
              <KeywordTag category={data.area} />
            </div>
            <div>좋아요랑댓글이거는develop머지하면넣을거</div>
          </div>
        </div>
        <div className="bottom-content">
          <div>인용한 콘텐츠</div>
          <p>{data.quotText}</p>
        </div>
      </CommunityDetailContainer>
    </>
  );
};
