import { ChangeEvent, KeyboardEvent, useState } from "react";

import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import background from "@/assets/BubbleChart/header_bg.svg";
import logo from "@/assets/main_logo.svg";
import { Inner } from "@/style/global";
const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>("");

  const Search = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };
  const handleOnKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log(searchText); // Enter 입력이 되면 api 쏘기
      setSearchText("");
      //SpaceTo() 이거 이용해서 라우팅
    }
  };

  const SpaceTo = (page: string) => {
    navigate(page);
  };
  const LogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };
  return (
    <Container>
      <Inner>
        <LeftHeader>
          <img
            src={logo}
            alt="광장"
            width={60}
            onClick={() => SpaceTo("/")}
          />
          <div
            className="community"
            onClick={() => SpaceTo("/community")}
          >
            커뮤니티
          </div>
        </LeftHeader>
        <RighttHeader>
          <div className="input">
            <HeaderInput
              placeholder="궁금한 사회 이슈를 검색하세요."
              value={searchText}
              onChange={Search}
              onKeyDown={handleOnKeyPress}
            />
            <IoSearch className="searchIcon" />
          </div>
          {!localStorage.getItem("accessToken") ? (
            <AccessUser>
              <div
                className="login"
                onClick={() => SpaceTo("/login")}
              >
                로그인
              </div>
              <div
                className="register"
                onClick={() => SpaceTo("/register")}
              >
                회원가입
              </div>
            </AccessUser>
          ) : (
            <AccessUser>
              <div
                className="login"
                onClick={() => SpaceTo("/mypage")}
              >
                마이페이지
              </div>
              <div
                className="register"
                onClick={LogOut}
              >
                로그아웃
              </div>
            </AccessUser>
          )}
        </RighttHeader>
      </Inner>
    </Container>
  );
};

export default Header;

export const Container = styled.div`
  background-image: url(${background});
  display: flex;
  height: 60px;
  color: var(--Gray5_400);
`;
export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
  }
  .community {
    padding-left: 18px;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 28px;
    cursor: pointer;
  }
`;
export const RighttHeader = styled.div`
  display: flex;
  .input {
    position: relative;
    margin: auto 0;
    .searchIcon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0;
      left: 10px;
      bottom: 0;
      margin: auto 0;
      opacity: 0.7;
    }
  }
`;

export const HeaderInput = styled.input`
  margin-right: 29px;
  width: 250px;
  outline: none;
  border-radius: 5px;
  opacity: 0.4;
  background: var(--Gray10_900, #212121);
  border: 2px solid var(--Gray10_900, #212121);
  padding: 4px 0 4px 37px;
  font-size: 0.875rem;
  line-height: 22px;
  color: var(--Gray1_50, #fafafa);
  caret-color: var(--Gray1_50, #fafafa);
  &::placeholder {
    color: var(--Gray5_400, #bdbdbd);
    font-size: 0.875rem;
    line-height: 22px;
  }
  &:focus {
    border: 2px solid var(--Main_Blue);
    &::placeholder {
      opacity: 0;
    }
  }
`;

export const AccessUser = styled.div`
  display: flex;
  align-items: center;
  color: var(--Gray4_300, #d9d9d9);
  .login {
    display: flex;
    gap: 12px;
    cursor: pointer;
  }
  .register {
    margin-left: 12px;
    cursor: pointer;
  }
  .login::after {
    content: "";
    display: block;
    width: 1px;
    height: 15.158px;
    background-color: var(--Gray4_300, #d9d9d9);
  }
`;
