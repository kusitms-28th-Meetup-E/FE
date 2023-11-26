import { useState } from "react";

import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { getDeleteSubcribe } from "@/apis";
import editNicknameImg from "@/assets/myPage/edit-pencil-nickname.svg";
import editImg from "@/assets/myPage/edit-pencil.svg";
import { TopTopicBox } from "@/components/molecules/longTopicBox";
import { SideBox } from "@/components/molecules/sideBox";
import { mySubscribeTopicData } from "@/recoil/atoms";

export const MySideBox = ({
  newNickname,
  profileImg,
}: {
  newNickname: string;
  profileImg: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [num, setNum] = useState<number>(0);

  const mySubData = useRecoilValue(mySubscribeTopicData);

  //닉네임 수정 시
  const startEditing = () => {
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const nicknameUpdate = () => {
    alert("닉네임이 변경되었습니다");
    setIsEditing(false);
  };

  //로그아웃
  const LogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";
  };

  const subscribeDelte = (topic: string, issueId: number) => {
    if (topic === "주거·사회 안전망") {
      setNum(2);
    } else if (topic === "일자리·노동") {
      setNum(1);
    } else if (topic === "환경") {
      setNum(3);
    } else if (topic === "교육") {
      setNum(4);
    }
    getDeleteSubcribe({ topicId: num, IssueId: issueId })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MySideBoxWrapper>
        <div className="my-profile">
          <div className="img-box">
            <img
              src={profileImg}
              alt="profile"
              className="profile-img"
            ></img>
            <div className="edit-box">
              <img
                src={editImg}
                alt=""
              />
            </div>
          </div>
          <div className="nick-box">
            {isEditing ? (
              <div className="change-nick">
                <input
                  type="text"
                  value={newNickname}
                  placeholder="변경할 닉네임을 입력해주세요."
                />
                <div className="btn-wrapper">
                  <button
                    className="cancel-btn"
                    onClick={cancelEditing}
                  >
                    취소
                  </button>
                  <button
                    className="change-btn"
                    onClick={nicknameUpdate}
                  >
                    변경
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p>{newNickname}</p>
                <img
                  src={editNicknameImg}
                  alt=""
                  onClick={startEditing}
                />
              </>
            )}
          </div>
        </div>
        <div className="my-line"></div>

        <SideBox />

        <div className="my-line"></div>

        <div className="subscribe-box">
          <div className="subscribe-title">구독한 사회이슈</div>
          <p> 사회이슈 키워드는 최대 3개까지 구독할 수 있어요.</p>
          <div className="subscribe-topic">
            {mySubData?.map((item, idx) => {
              return (
                <div className="topic-wrapper">
                  <TopTopicBox
                    key={idx}
                    data={item}
                  />
                  <button
                    className="subscribe-cancel"
                    onClick={() => subscribeDelte(item.topic, item.issueId)}
                  >
                    구독취소
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-line"></div>

        <div
          className="my-logout"
          onClick={LogOut}
        >
          로그아웃
        </div>
      </MySideBoxWrapper>
    </>
  );
};

export const MySideBoxWrapper = styled.div`
  border-radius: 5px;
  background: var(--Gray1_50, #fafafa);
  width: 313px;
  height: 100%;
  flex-shrink: 0;
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);

  .my-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 30px;

    .img-box {
      display: flex;
      position: relative;

      .profile-img {
        margin-top: 25px;
        width: 89px;
        height: 89px;
        border-radius: 100%;
        border: 1px solid var(--Gray4_300, #d9d9d9);
      }

      .edit-box {
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 0;

        width: 32px;
        height: 32px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--Gray9_800);
      }
    }

    .nick-box {
      display: flex;
      margin-top: 16px;
      gap: 6px;
      align-items: center;

      p {
        color: var(--Gray9_800, #424242);
        font-size: var(--text_h5);
        font-weight: 700;
        line-height: 34px;
        letter-spacing: -0.36px;
      }

      img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .change-nick {
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;

        input {
          padding: 10px;
          width: 190px;
          border-radius: 5px;
          outline: none;
          border: 1px solid gray;
          font-family: Pretendard; //안먹혀서

          &::placeholder {
            color: gray;
          }
        }

        .btn-wrapper {
          display: flex;
          justify-content: center;
          gap: 10px;

          .change-btn {
            border-radius: 5px;
            height: 35px;
            width: 60px;
            color: white;
            border: none;
            font-family: Pretendard; //안먹혀서
            background-color: var(--Main_Blue);
            cursor: pointer;
          }

          .cancel-btn {
            height: 35px;
            border-radius: 5px;
            width: 60px;
            color: var(--Gray6_500);
            border: none;
            font-family: Pretendard; //안먹혀서
            background-color: var(--Gray3_200);
            cursor: pointer;
          }
        }
      }
    }
  }

  .tab-box {
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    p {
      color: var(--Gray7_600, #757575);
      border-radius: 5px;
      font-size: var(--text_b2);
      line-height: 24px;
      letter-spacing: -0.24px;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background: var(--Gray3_200, #eee);
        color: var(--Gray10_900, #212121);
        font-size: var(--text_b2);
        font-weight: 600;
      }
    }
  }

  .my-line {
    height: 1px;
    background: var(--Gray3_200, #eee);
    margin: 20px 10px;
  }

  .subscribe-box {
    padding: 0px 20px;

    .subscribe-title {
      color: var(--Gray9_800, #424242);
      font-size: var(--text_b2);
      font-weight: 600;
      line-height: 24px;
    }

    p {
      color: var(--Gray6_500, #959595);
      font-size: var(--text_cap1);
      margin-top: 5px;
      line-height: 18px;
    }

    .subscribe-topic {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      gap: 10px;

      .topic-wrapper {
        position: relative;

        &:hover .subscribe-cancel {
          visibility: visible;
        }

        .subscribe-cancel {
          cursor: pointer;
          position: absolute;
          top: 15px;
          right: 15px;
          border: none;
          border-radius: 55px;
          background: var(--Gray10_900, #212121);

          color: var(--Gray1_50, #fafafa);
          text-align: center;
          padding: 3px 10px;

          font-family: Pretendard;
          font-size: var(--text_cap1);
          font-weight: 600;
          line-height: 18px;
          letter-spacing: -0.18px;
          visibility: hidden;

          &:hover {
            color: var(--Error_50, #dc362e);
            background: var(--Gray2_100, #f5f5f5);
          }
        }
      }
    }
  }

  .my-logout {
    cursor: pointer;
    color: var(--Gray6_500, #959595);
    text-align: center;
    font-size: var(--text_b3);
    line-height: 18px;
    letter-spacing: -0.21px;
    margin-bottom: 20px;
  }
`;
