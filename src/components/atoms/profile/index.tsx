import temp from "@/assets/react.svg";
import { ProfileProps } from "@/types";

import { BigUserInfo, UserInfo } from "./style";

const formatDate = (inputDate: string) => {
  if (!inputDate) {
    return "";
  }
  console.log("실행");
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString();
  return formattedDate;
};

export const Profile = ({ nickname, profileImg, date }: ProfileProps) => {
  profileImg = temp;

  const formattedDate = formatDate(date);

  return (
    <UserInfo>
      <img
        src={profileImg}
        alt=""
      />
      <div>
        <p className="user-nickname">{nickname}</p>
        <p className="content-date">{formattedDate}</p>
      </div>
    </UserInfo>
  );
};

export const BigProfile = ({ nickname, profileImg, date }: ProfileProps) => {
  profileImg = temp;
  const formattedDate = formatDate(date);

  return (
    <BigUserInfo>
      <img
        src={profileImg}
        alt=""
      />
      <div>
        <p className="user-nickname">{nickname}</p>
        <p className="content-date">{formattedDate}</p>
      </div>
    </BigUserInfo>
  );
};
