import temp from "@/assets/react.svg";
import { ProfileProps } from "@/types";

import { UserInfo } from "./style";

export const Profile = ({ nickname, profileImg, date }: ProfileProps) => {
  profileImg = temp;

  return (
    <UserInfo>
      <img
        src={profileImg}
        alt=""
      />
      <div>
        <p className="user-nickname">{nickname}</p>
        <p className="content-date">{date}</p>
      </div>
    </UserInfo>
  );
};
