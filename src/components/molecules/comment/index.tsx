import { BigProfile } from "@/components/atoms/profile";
import { CommentItemProps } from "@/types";

import { CommentContainer } from "./style";

export const Comment = ({ data }: CommentItemProps) => {
  return (
    <>
      {data?.reverse().map((item, idx) => (
        <CommentContainer key={idx}>
          <BigProfile
            nickname={item.nickname}
            date={item.createAt}
            profileImg={item.profileImg}
          />
          <div className="comment-text">{item.talk}</div>
        </CommentContainer>
      ))}
    </>
  );
};
