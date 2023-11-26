import { ProfileProps } from "@/types";

import { BigUserInfo, UserInfo, LongUserInfo } from "./style";

const formatDate = (inputDate: string) => {
  if (!inputDate) {
    return "";
  }
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString();
  return formattedDate;
};

export const Profile = ({ nickname, profileImg, date }: ProfileProps) => {
  const formattedDate = formatDate(date);

  return (
    <UserInfo>
      <img
        src={profileImg}
        alt="O"
      />
      <div>
        <p className="user-nickname">{nickname}</p>
        <p className="content-date">{formattedDate}</p>
      </div>
    </UserInfo>
  );
};

export const LongProfile = ({ nickname, profileImg, date }: ProfileProps) => {
  const formattedDate = formatDate(date);

  return (
    <LongUserInfo>
      <img
        src={profileImg}
        alt="O"
      />
      <p className="user-nickname">{nickname}</p>
      <p className="content-date">{formattedDate}</p>
    </LongUserInfo>
  );
};

export const BigProfile = ({ nickname, profileImg, date }: ProfileProps) => {
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
