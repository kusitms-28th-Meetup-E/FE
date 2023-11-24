import moment from "moment";
import { useSetRecoilState } from "recoil";

import { LikeBorderButton, QuotBorderButton } from "@/components/atoms/button";
import { ShowModalState, ToastState, modalState } from "@/recoil/atoms";
import { ArticleDataProps } from "@/types";

import { SlideWrapper } from "./style";

export const SlideItem = ({ data }: { data: ArticleDataProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setModal = useSetRecoilState(modalState);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ShowModal = useSetRecoilState(ShowModalState);
  const setOnToast = useSetRecoilState<boolean>(ToastState);

  const Modal = () => {
    if (!localStorage.getItem("accessToken")) {
      setOnToast(true);
      setTimeout(() => {
        setOnToast(false);
      }, 1500);
    } else {
      setModal(data);
      ShowModal(true);
      console.log("modal-data", data);
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <SlideWrapper
      onClick={() =>
        data?.type === "YOUTUBE"
          ? window.open(`https://www.youtube.com/watch?v=${data?.url}`)
          : window.open(data?.url)
      }
    >
      <div className="slide-container">
        <div className="slide-image">
          <img
            src={data?.imgUrl}
            alt="썸네일"
          />
        </div>
        <div className="slide-text">
          <div className="top-text">
            <div className="text-type">{data?.type}</div>
            <div
              className="text-title"
              dangerouslySetInnerHTML={{ __html: data?.title }}
            ></div>
          </div>
          <div className="last-text">
            <div className="text-date">{moment(data?.pubDate).format("YYYY.MM.DD")}</div>
            {data.title ? (
              <div
                className="button-wrapper"
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.stopPropagation();
                }}
              >
                {data.title !== undefined && (
                  <LikeBorderButton
                    likeCount={30}
                    initialLikeStatus="false"
                  />
                )}
                <QuotBorderButton
                  onClick={() => {
                    Modal();
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
