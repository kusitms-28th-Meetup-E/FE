import nextImg from "@/assets/NextArrowImg.svg";
import commentImg from "@/assets/comment.svg";
import likeImg from "@/assets/like.svg";
import prevImg from "@/assets/prevArrowImg.svg";
import { ButtonProps, CategoryButtonProps } from "@/types/index.ts";

import { BorderStyleButton, CateButton, KakaoBtn, NextArrow, PrevArrow, TestBtn } from "./style.ts";

export const KakaoButton = ({ children, onClick }: ButtonProps) => {
  return <KakaoBtn onClick={onClick}>{children}</KakaoBtn>;
};

export const BlueButton = ({ children, onClick }: ButtonProps) => {
  return <TestBtn onClick={onClick}>{children}</TestBtn>;
};

export const LikeButton = ({ likeCount }: { likeCount: number }) => {
  return (
    <div>
      <img
        src={likeImg}
        alt="좋아요"
      />
      <p>{likeCount}</p>
    </div>
  );
};

export const CommentButton = ({ commentCount }: { commentCount: number }) => {
  return (
    <div>
      <img
        src={commentImg}
        alt="comment"
      />
      <p>{commentCount}</p>
    </div>
  );
};

export const CategoryButton = ({ children, isSelected, onClick }: CategoryButtonProps) => {
  return (
    <CateButton
      onClick={onClick}
      isSelected={isSelected}
    >
      {children}
    </CateButton>
  );
};

export const PrevArrowButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <PrevArrow onClick={onClick}>
      <img
        src={prevImg}
        alt="prev"
      />
    </PrevArrow>
  );
};

export const NextArrowButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <NextArrow onClick={onClick}>
      <img
        src={nextImg}
        alt="prev"
      />
    </NextArrow>
  );
};

export const LikeBorderButton = ({ likeCount }: { likeCount: number }) => {
  return (
    <BorderStyleButton>
      <img
        src={likeImg}
        alt="좋아요"
      />
      <p>{likeCount}</p>
    </BorderStyleButton>
  );
};

export const QuotBorderButton = ({ quotCount }: { quotCount: number }) => {
  return (
    <BorderStyleButton>
      <div>인용</div>
      <p>{quotCount}</p>
    </BorderStyleButton>
  );
};

export const CommentBorderButton = ({ commentCount }: { commentCount: number }) => {
  return (
    <BorderStyleButton>
      <img
        src={commentImg}
        alt="comment"
      />
      <p>{commentCount}</p>
    </BorderStyleButton>
  );
};
