import { useState } from "react";

import editNicknameImg from "@/assets/myPage/edit-pencil-nickname.svg";
import editImg from "@/assets/myPage/edit-pencil.svg";
import { SideBox } from "@/components/molecules/sideBox";

import { MySideBoxWrapper } from "./style";

export const ResponsiveSideBox = ({
  newNickname,
  profileImg,
}: {
  newNickname: string;
  profileImg: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);

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

  return (
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

      <div
        className="my-logout"
        onClick={LogOut}
      >
        로그아웃
      </div>
    </MySideBoxWrapper>
  );
};
