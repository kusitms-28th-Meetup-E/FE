import { useState } from "react";

import { BiCommentDetail } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { PiThumbsUpBold } from "react-icons/pi";
import { useSetRecoilState } from "recoil";

import nextImg from "@/assets/NextArrowImg.svg";
import commentImg from "@/assets/comment.svg";
import likeImg from "@/assets/like.svg";
import plus from "@/assets/plus_blue.svg";
import prevImg from "@/assets/prevArrowImg.svg";
import { ToastState } from "@/recoil/atoms/index.ts";
import { ButtonProps, CategoryButtonProps, SubscribeButtonProps } from "@/types/index.ts";

import {
  BorderStyleButton,
  BorderStyleButtonTemp,
  CateButton,
  KakaoBtn,
  NextArrow,
  PrevArrow,
  TestBtn,
  SubscribeBtn,
  CloseButtonStyle,
} from "./style.ts";

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

export const SubscribeButton = ({ onClick, onOff }: SubscribeButtonProps) => {
  return (
    <SubscribeBtn
      onClick={onClick}
      $onOff={onOff}
    >
      {!onOff ? (
        <>
          <div>주제 구독하기</div>
          <img
            className="plus"
            src={plus}
            alt="+"
            width={14}
          />
        </>
      ) : (
        <div>구독 중</div>
      )}
    </SubscribeBtn>
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

export const LikeBorderButton = ({
  likeCount,
  initialLikeStatus,
}: {
  likeCount: number;
  initialLikeStatus: string;
}) => {
  // const isStatus = initialLikeStatus === "true";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [likeStatus, setLikeStatus] = useState(initialLikeStatus);
  const [count, setCount] = useState(likeCount);
  const setOnToast = useSetRecoilState<boolean>(ToastState);

  const handleButtonClick = () => {
    if (!localStorage.getItem("accessToken")) {
      setOnToast(true);
      setTimeout(() => {
        setOnToast(false);
      }, 1500);
    } else {
      if (likeStatus == "false") {
        setCount(count + 1);
        setLikeStatus("true");
      } else if (likeStatus == "true") {
        setCount(count - 1);
        setLikeStatus("false");
      }
    }
  };

  return (
    <BorderStyleButtonTemp
      likeStatus={!likeStatus}
      onClick={handleButtonClick}
    >
      <PiThumbsUpBold />
      <p>{count}</p>
    </BorderStyleButtonTemp>
  );
};

export const LikeContentBorderButton = ({
  likeCount,
  initialLikeStatus,
}: {
  likeCount: number;
  initialLikeStatus: boolean;
}) => {
  // const isStatus = initialLikeStatus === "true";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [likeStatus, setLikeStatus] = useState(initialLikeStatus);
  const [count, setCount] = useState(likeCount);
  const setOnToast = useSetRecoilState<boolean>(ToastState);

  const handleButtonClick = () => {
    if (!localStorage.getItem("accessToken")) {
      setOnToast(true);
      setTimeout(() => {
        setOnToast(false);
      }, 1500);
    } else {
      if (likeStatus == false) {
        setCount(count + 1);
        setLikeStatus(true);
      } else if (likeStatus == true) {
        setCount(count - 1);
        setLikeStatus(false);
      }
    }
  };

  return (
    <BorderStyleButtonTemp
      likeStatus={Boolean(likeStatus)}
      onClick={handleButtonClick}
    >
      <PiThumbsUpBold />
      <p>{count}</p>
    </BorderStyleButtonTemp>
  );
};

export const QuotBorderButton = ({ onClick }: { onClick?: () => void }) => {
  //인용 버튼 클릭 시 모달창 오픈

  return (
    <>
      <BorderStyleButton onClick={onClick}>
        <div>인용</div>
      </BorderStyleButton>
    </>
  );
};

export const CommentBorderButton = ({ commentCount }: { commentCount: number }) => {
  return (
    <BorderStyleButton>
      <BiCommentDetail />
      <p>{commentCount}</p>
    </BorderStyleButton>
  );
};

export const ModalCloseButton = () => {
  return (
    <CloseButtonStyle>
      <IoCloseOutline />
    </CloseButtonStyle>
  );
};
