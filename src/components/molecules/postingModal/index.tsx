import { ChangeEvent, useState } from "react";

import moment from "moment";
import { useRecoilValue } from "recoil";

import { postCommunityItem } from "@/apis";
import logoImg from "@/assets/main_logo.svg";
import { BigProfile } from "@/components/atoms/profile";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { modalState } from "@/recoil/atoms";
import { ArticleDataProps } from "@/types";

import { NoticeModal } from "../noticeModal";

import { PostingModalContainer } from "./style";

export const PostingModal = () => {
  const [writeText, setWriteText] = useState("");
  const [textLen, setTextLen] = useState(0);

  const date = moment(new Date()).format("YYYY.MM.DD");
  console.log(date);

  // const [contentsId, setContentsId] = useState<number | undefined>(undefined);

  const [uploadBtn, setUploadBtn] = useState(true);

  const [isComplete, setIsComplete] = useState(false);

  const nick = localStorage.getItem("nickname");
  console.log(nick);

  //데이터 받아오기
  const modalData = useRecoilValue<ArticleDataProps>(modalState);
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

  // const myNickname = window.localStorage.getItem("nickname");
  // const myImg = window.localStorage.getItem("profileImg");

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
          // nickname={myNickname ? myNickname : "광장피플"}
          nickname="광장피플"
          // date="2023.11.25"
          date={date}
          // profileImg={myImg ? myImg : logoImg}
          profileImg={logoImg}
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
        <TopicTag category={modalData.topic} />
        <KeywordTag category={modalData.topic}>{modalData.issueTitle}</KeywordTag>
        <KeywordTag category={modalData.topic}>{modalData.keyword}</KeywordTag>
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
      <div
        className="content-quot"
        onClick={() => {
          window.open(modalData.url);
        }}
      >
        <div className="quot-text">
          <p>인용한 콘텐츠</p>
          <div dangerouslySetInnerHTML={{ __html: modalData?.title }}></div>
        </div>
        <img
          src={modalData?.imgUrl}
          alt=""
        />
      </div>
      {isComplete && <NoticeModal />}
    </PostingModalContainer>
  );
};
