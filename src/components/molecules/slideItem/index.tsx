import moment from "moment";
import { useSetRecoilState } from "recoil";

import { LikeBorderButton, QuotBorderButton } from "@/components/atoms/button";
import { ShowModalState, modalState } from "@/recoil/atoms";
import { ArticleDataProps } from "@/types";

import { SlideWrapper } from "./style";

export const SlideItem = ({ data }: { data: ArticleDataProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setModal = useSetRecoilState(modalState);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ShowModal = useSetRecoilState(ShowModalState);

  const Modal = () => {
    setModal(data);
    ShowModal(true);
    document.body.style.overflowY = "hidden";
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
              <div className="button-wrapper">
                {data.title !== undefined && (
                  <LikeBorderButton
                    likeCount={30}
                    initialLikeStatus="true"
                  />
                )}
                <QuotBorderButton onClick={Modal} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
