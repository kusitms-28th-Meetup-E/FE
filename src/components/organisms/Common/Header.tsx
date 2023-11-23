import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";
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
  const [openlist, setOpenlist] = useState<boolean>(false);
  const [opensearch, setOpensearch] = useState<boolean>(false);

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
  const handleResize = () => {
    if (window.innerWidth > 690) {
      setOpenlist(false);
    }
    if (window.innerWidth > 580) {
      setOpensearch(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const urlSplit = document.location.href.split("/");
    setLink(urlSplit[urlSplit.length - 1]);
    if (document.location.href.split("/")[3] !== "search") {
      setSearchText("");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link, document.location.href]);
  return (
    <Wrapper $openlist={openlist}>
      {" "}
      <Container
        $link={link}
        $openlist={openlist}
      >
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
            <div style={{ position: "relative", marginRight: "30px" }}>
              {opensearch ? (
                <FiX
                  className="responsiveSearchIcon"
                  onClick={() => setOpensearch(false)}
                />
              ) : (
                <IoSearch
                  className="responsiveSearchIcon"
                  onClick={() => setOpensearch(true)}
                />
              )}
              {opensearch ? (
                <div className="responsiveBackground">
                  <div className="responsiveinput">
                    <HeaderResponsiveInput
                      ref={inputRef}
                      placeholder="궁금한 사회 이슈를 검색하세요."
                      value={searchText}
                      onChange={Search}
                      onKeyDown={handleOnKeyPress}
                    />
                    <IoSearch className="searchIcon" />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
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
            {openlist ? (
              <FiX
                className="list-icons"
                onClick={() => setOpenlist(false)}
              />
            ) : (
              <FiMenu
                className="list-icons"
                onClick={() => setOpenlist(true)}
              />
            )}
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

          <div className="list">
            {!localStorage.getItem("accessToken") ? (
              <div className="user">
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
              </div>
            ) : (
              <div className="user">
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
              </div>
            )}
          </div>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;

export const Wrapper = styled.div<{ $openlist: boolean }>`
  position: relative;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  top: 0;
  z-index: 9999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none; // drag 방지
  .list {
    display: ${(props) => (props.$openlist ? "block" : "none")};
    width: 40%;
    height: 130px;
    background-color: rgba(33, 33, 33, 0.9);
    position: absolute;
    margin-top: 60px;
    z-index: 3;
    border-radius: 15px;
    right: 0;
  }
  .list .user {
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
  }
  .list .user .login,
  .list .user .register {
    height: 50%;
    display: flex;
    align-items: center;
    font-size: var(--text_h6);
    cursor: pointer;
    justify-content: center;
  }
  .list .user .login {
    border-bottom: 1px solid var(--Gray7_600);
  }
  .list-icons {
    display: none;
  }
  @media (max-width: 690px) {
    .list-icons {
      cursor: pointer;
      display: block;
      transform: scale(1.7);
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
  }
  @media (min-width: 690px) {
    .list {
      display: none;
    }
  }
  .responsiveSearchIcon {
    display: none;
  }
  @media (max-width: 580px) {
    .responsiveSearchIcon {
      cursor: pointer;
      display: block;
      transform: scale(1.4);
      top: 0;
      bottom: 0;
      margin: auto 60px auto 0;
      position: absolute;
      padding-right: 50px;
    }
  }

  .responsiveBackground {
    position: absolute;
    right: 20px;
    z-index: 9999;
    width: 380px;
    height: 60px;
    border-radius: 5px;
    background-color: rgba(33, 33, 33, 0.9);
  }
  .responsiveinput {
    position: absolute;
    display: flex;
    width: inherit;
  }
  .responsiveinput .searchIcon {
    display: flex;
    align-items: center;
    transform: scale(1.4);
    margin: auto 0;
    margin-right: 15px;
  }
  @media (max-width: 450px) {
    .responsiveBackground {
      width: 270px;
    }
  }
`;

export const HeaderResponsiveInput = styled.input`
  margin-right: 20px;
  margin-top: 2px;
  width: 80%;
  outline: none;
  border-radius: 5px;
  opacity: 0.4;
  background: var(--Gray10_900, #212121);
  border: 2px solid var(--Gray10_900, #212121);
  padding: 15px 0 15px 37px;
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

export const Container = styled.div<{ $link: string; $openlist: boolean }>`
  background-image: ${(props) => (props.$link ? "" : `url(${background})`)};
  display: flex;
  height: 60px;
  color: var(--Gray5_400);
  background: ${(props) => (props.$link ? "rgba(33, 33, 33, 0.9);" : "")};
  background-size: 100% 60px;
  @media (max-width: 1150px) {
    padding: 0 30px;
  }
  @media (max-width: 580px) {
    .input {
      display: none;
    }
  }
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
  position: relative;
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
  @media (max-width: 690px) {
    display: none;
  }
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
