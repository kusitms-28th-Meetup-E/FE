import { ChangeEvent, useState } from "react";

import { useRecoilValue } from "recoil";

import { postCommunityItem } from "@/apis";
import { BigProfile } from "@/components/atoms/profile";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { modalState } from "@/recoil/atoms";
import { ArticleItemProps } from "@/types";

import { NoticeModal } from "../noticeModal";

import { PostingModalContainer } from "./style";

export const PostingModal = () => {
  const [writeText, setWriteText] = useState("");
  const [textLen, setTextLen] = useState(0);

  // const [contentsId, setContentsId] = useState<number | undefined>(undefined);

  const [uploadBtn, setUploadBtn] = useState(true);

  const [isComplete, setIsComplete] = useState(false);
  //데이터 받아오기
  const modalData = useRecoilValue<ArticleItemProps | null>(modalState);
  console.log("data:", modalData);

  console.log(modalData?.contents_id);
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWriteText(e.currentTarget.value);
    setTextLen(e.currentTarget.value.length);

    if (e.currentTarget.value == "") {
      setUploadBtn(true);
    } else {
      setUploadBtn(false);
    }
  };

  const accessToken = window.localStorage.getItem("accessToken");
  console.log("token:", accessToken);

  const onClickButton = async () => {
    console.log("hihi");
    if (modalData != null) {
      console.log("글 올리기 ");
      // setContentsId(modalData.contents_id);
      // console.log(contentsId);
    }
    if (modalData?.contents_id != null && accessToken != null) {
      console.log("text");
      await postCommunityItem(modalData?.contents_id, writeText, accessToken)
        .then((res) => {
          console.log(res.data);
          setIsComplete(true);
        })
        .catch((err) => {
          console.log(err);
          setIsComplete(false);
        });
    }
  };

  return (
    <PostingModalContainer onClick={(e) => e.stopPropagation()}>
      <div className="first-box">
        <BigProfile
          nickname="chaemin"
          date="2001.04.05"
          profileImg=""
        />
        <button
          onClick={onClickButton}
          disabled={uploadBtn}
          className={uploadBtn ? "" : "abled"}
        >
          글 올리기
        </button>
      </div>
      <div className="second-box">
        <TopicTag category="환경" />
        <KeywordTag category="ㅇㄹㅇㄹ" />
        <KeywordTag category="ㅇㄹㅇㄹ" />
      </div>
      <div className="input-box">
        <textarea
          placeholder="내용을 입력해주세요."
          maxLength={500}
          value={writeText}
          onChange={onChange}
        />
        <p>({textLen}/500)</p>
      </div>
      <div className="content-quot">
        <div className="quot-text">
          <p>인용한 콘텐츠</p>
          <div>{modalData?.title}</div>
        </div>
        <img
          src={modalData?.image}
          alt=""
        />
      </div>
      {isComplete && <NoticeModal />}
    </PostingModalContainer>
  );
};
