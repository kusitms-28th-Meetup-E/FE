import { useState, useRef, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { getComment, getMySubscribeData, postComment } from "@/apis";
import temp from "@/assets/main_logo.svg";
import { Comment } from "@/components/molecules/comment";
import { ToastState } from "@/recoil/atoms";

export const CommentList = () => {
  const { topicId } = useParams();
  const { communityId } = useParams();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState("");
  const [registerBtn, setRegisterBtn] = useState(true);
  const [commentdata, setCommentData] = useState([]);
  const setmodal = useSetRecoilState(ToastState);
  const [pf, setPf] = useState(temp);
  const [newNickname, setNewNickname] = useState("");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    if (e.currentTarget.value === "") {
      setRegisterBtn(true);
    } else {
      setRegisterBtn(false);
    }
    // textarea 높이 조절
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };
  const commentRegister = () => {
    if (!localStorage.getItem("accessToken")) {
      setmodal(true);
      setTimeout(() => {
        setmodal(false);
      }, 1500);
    }
    postComment({
      topicId: parseInt(topicId || "0"),
      communityId: parseInt(communityId || "0"),
      talk: text,
    })
      .then((res) => {
        console.log(res.data.data);
        setCommentData(res.data.data);
        setText("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const handleOnKeyPress = (e: KeyboardEvent) => {
  //   if (e.key === "Enter") {
  //     if (textareaRef.current !== null && e.nativeEvent === false) {
  //       //한글 중복 입력 해결
  //       textareaRef.current.disabled = false; //input 비활성화 해제
  //       textareaRef.current.blur(); //input에 focus 해제
  //     }
  //     postComment({
  //       topicId: parseInt(topicId || "0"),
  //       communityId: parseInt(communityId || "0"),
  //       talk: text,
  //     })
  //       .then((res) => {
  //         console.log(res.data.data);
  //         setCommentData(res.data.data);
  //         setText("");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");

    if (accessToken) {
      getMySubscribeData(accessToken)
        .then((res) => {
          setPf(res.data.data.profileImg);
          setNewNickname(res.data.data.nickname);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getComment({
      topicId: parseInt(topicId || "0"),
      communityId: parseInt(communityId || "0"),
    }).then((res) => {
      console.log(res.data.data);
      setCommentData(res.data.data);
      setText("");
    });
  }, [communityId, topicId]);

  return (
    <CommunityListWrapper>
      <div className="comment-count">
        <b>{commentdata.length}</b>개의 댓글이 있어요
      </div>

      {windowWidth < 800 ? (
        <div className="comment-post-responsive">
          <div>
            <img
              src={pf}
              alt="프로필"
            />
            <div style={{ marginLeft: "50px", paddingTop: "20px" }}>{newNickname}</div>
          </div>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={onChange}
            placeholder="댓글을 입력해주세요."
            //onKeyDown={handleOnKeyPress}
          />
          <button
            onClick={commentRegister}
            disabled={registerBtn}
            className={registerBtn ? "" : "abled"}
          >
            등록
          </button>
        </div>
      ) : (
        <div className="comment-post">
          <img
            src={pf}
            alt="프로필"
          />
          <textarea
            ref={textareaRef}
            value={text}
            onChange={onChange}
            placeholder="댓글을 입력해주세요."
            //onKeyDown={handleOnKeyPress}
          />
          <button
            onClick={commentRegister}
            disabled={registerBtn}
            className={registerBtn ? "" : "abled"}
          >
            등록
          </button>
        </div>
      )}
      <div className="line"></div>
      <div className="comment-box">
        <Comment data={commentdata} />
      </div>
    </CommunityListWrapper>
  );
};

export const CommunityListWrapper = styled.div`
  padding: 16px 30px;
  box-sizing: border-box;
  max-width: 896px;
  margin: 400px auto 150px;
  border-radius: 5px;
  background: var(--White, #fff);
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
    border-radius: 5px;
  }
  .line {
    margin: 20px 0px;
    border-bottom: 2px solid var(--Gray2_100, #f5f5f5);
  }

  .comment-count {
    color: var(--Gray9_800, #424242);
    font-size: var(--text_b1);
    line-height: 28px;
    letter-spacing: -0.27px;
  }

  .comment-post {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    width: 100%;
    align-items: center;
    /* border: 1px solid blue; */
    //justify-content: center;
    position: relative;
  }
  .comment-block {
    flex-direction: column;
  }
  .comment-post img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 8px;
  }
  .comment-post-responsive {
    position: relative;
  }
  .comment-post-responsive img {
    display: block;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 8px;
  }
  .comment-post-responsive textarea {
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    height: 100px;
    border-radius: 5px;
    background: var(--Gray3_200, #eee);
    outline: none;
    border: 2px solid transparent;
    padding: 16px;
    padding-bottom: 90px;
    box-sizing: border-box;
    resize: none;
    font-size: var(--text_b2);
    caret-color: var(--Main_Blue);
    width: -webkit-fill-available;
    &::placeholder {
      line-height: 24px;

      font-size: var(--text_b2);
      color: var(--Gray6_500, #959595);
    }
    &:focus {
      border: 2px solid var(--Main_Blue);
      &::placeholder {
        opacity: 0;
      }
    }
  }
  .comment-post-responsive button {
    font-family: " Pretendard";
    height: 56px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 200px;
    border-radius: 5px;
    width: -webkit-fill-available;
    padding: 20px;
    border: none;
    background: var(--Gray3_200, #eee);
    color: var(--Gray6_500, #959595);
    text-align: center;
    font-size: var(--text_b1);
    font-weight: 600;
    cursor: pointer;
    line-height: 20px;
  }
  .comment-post textarea {
    @media (max-width: 900px) {
      width: 600px;
    }
    @media (max-width: 800px) {
      width: 500px;
    }
    @media (max-width: 700px) {
      width: 400px;
    }
    @media (max-width: 600px) {
      width: 300px;
    }
    @media (max-width: 500px) {
      width: 200px;
    }
    @media (max-width: 400px) {
      width: 100px;
    }
    height: 56px;
    line-height: 24px;
    margin-left: 60px;
    width: 672px;
    border-radius: 5px;
    background: var(--Gray3_200, #eee);
    outline: none;
    border: 2px solid transparent;
    padding: 16px;
    box-sizing: border-box;
    resize: none;
    font-size: var(--text_b2);
    caret-color: var(--Main_Blue);

    &::placeholder {
      line-height: 24px;

      font-size: var(--text_b2);
      color: var(--Gray6_500, #959595);
    }
    &:focus {
      border: 2px solid var(--Main_Blue);
      &::placeholder {
        opacity: 0;
      }
    }

    /* @media (max-width: 672px) {
      width: 100%;
    } */
  }

  .comment-post button {
    font-family: " Pretendard";
    height: 56px;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    width: 84px;
    padding: 20px;
    border: none;
    background: var(--Gray3_200, #eee);
    color: var(--Gray6_500, #959595);
    text-align: center;
    font-size: var(--text_b1);
    font-weight: 600;
    cursor: pointer;
    line-height: 20px;
  }
  button.abled {
    background: var(--Main_Blue);
    color: var(--White);
  }

  .comment-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 800px) {
      margin-top: 250px;
    }
  }
`;
