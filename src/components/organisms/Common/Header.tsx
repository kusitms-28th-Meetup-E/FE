import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

import background from "@/assets/BubbleChart/header_bg.png";
import logo from "@/assets/main_logo.svg";
import { searchResultState, searchTextState } from "@/recoil/atoms";
import { Inner } from "@/style/global";
const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useRecoilState<string>(searchTextState);
  const [link, setLink] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null); //ts
  const setSearchResult = useSetRecoilState(searchResultState);
  const Search = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };
  const handleOnKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (inputRef.current !== null && e.nativeEvent.isComposing === false) {
        //한글 중복 입력 해결
        inputRef.current.disabled = false; //input 비활성화 해제
        inputRef.current.blur(); //input에 focus 해제
      }
      setSearchResult(searchText);
      // console.log(searchText); // Enter 입력이 되면 api 쏘기
      navigate(`search/?q=${searchText}`);

      //SpaceTo() 이거 이용해서 라우팅
    }
  };

  const SpaceTo = (page: string) => {
    navigate(page);
    // window.location.reload(); // 일단 임시로 해결
  };
  const LogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };

  useEffect(() => {
    const urlSplit = document.location.href.split("/");
    setLink(urlSplit[urlSplit.length - 1]);
    if (document.location.href.split("/")[3] !== "search") {
      setSearchText("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link, document.location.href]);
  return (
    <Container $link={link}>
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
              ref={inputRef}
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

export const Container = styled.div<{ $link: string }>`
  background-image: ${(props) => (props.$link ? "" : `url(${background})`)};
  display: flex;
  height: 60px;
  color: var(--Gray5_400);
  background: ${(props) => (props.$link ? "rgba(33, 33, 33, 0.9);" : "")};
  background-size: 100% 60px;
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
