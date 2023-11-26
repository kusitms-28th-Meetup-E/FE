import { ChangeEvent, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { getDuplicateNickname, putKakaoRegister } from "@/apis";
import Input from "@/components/atoms/input";
import { accessTokenState } from "@/recoil/atoms";

import {
  BirthBox,
  DuplicateBtn,
  GenderBox,
  GenderCheckBtn,
  NicknameBox,
  RegisterBtn,
} from "../register/style";

import { AddInfoBox, Container, Title } from "./style";
const addInfoText = "회원 가입을 위한\n추가 정보를 입력해주세요.";

const AddInfomation = () => {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(accessTokenState);
  const [nickname, setNickname] = useState<string>("");
  const [duplicateShowNickname, setDuplicateShowNickname] = useState<boolean>(false);
  const [duplicateNickname, setDuplicateNickname] = useState<boolean>(false);
  const [errorNicknameLine, setErrorNicknameLine] = useState<boolean>(false);
  const [birth, setBirth] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [registerFlag, setRegisterFlag] = useState<boolean>(true);

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDuplicateShowNickname(false);
    setErrorNicknameLine(false);
    if (value.length < 11) {
      setNickname(value);
    }
  };
  //닉네임 중복 체크
  const DuplicateCheckNickname = () => {
    // 로딩 후.
    // api 요청해야함. 요청이 오면
    // if 성공이 오면 듀플리케이트 값 true로 하고 show true

    getDuplicateNickname(nickname)
      .then((res) => {
        console.log(res);
        if (!res.data.data.isDuplicated) {
          setDuplicateNickname(true);
          setDuplicateShowNickname(true); // 일단 버튼을 누르면 hide 클래스 제거
        } else {
          setDuplicateNickname(false);
          setDuplicateShowNickname(true); // 일단 버튼을 누르면 hide 클래스 제거
          setErrorNicknameLine(true); //에러 라인 전달
        }
      })
      .catch((err) => console.log(err));
  };
  const BirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 9) {
      setBirth(e.target.value);
    }
  };
  const RegisterOk = () => {
    putKakaoRegister({ nickname, birth, gender, accessToken })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        navigate("/");
      })
      .catch((err) => console.log(err));

    //추가정보 기입 api 발동과 동시에 회원가입 완료 되었다는 모달창 띄우기
  };

  useEffect(() => {
    if (nickname && duplicateNickname && birth && gender) {
      setRegisterFlag(false);
    } else {
      setRegisterFlag(true);
    }
  }, [nickname, duplicateNickname, birth, gender]);

  return (
    <Container>
      <Title>
        <div className="kakaoText">카카오 회원가입 완료</div>
        <div className="addInfo">{addInfoText}</div>
      </Title>
      <AddInfoBox>
        <NicknameBox>
          <p className="title">닉네임</p>
          <div className="inputNickname">
            <Input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="광장에서 사용할 닉네임을 입력해주세요."
              errorLine={errorNicknameLine}
            />
            <DuplicateBtn
              className={duplicateShowNickname ? "title" : ""}
              onClick={DuplicateCheckNickname}
            >
              중복확인
            </DuplicateBtn>
          </div>
          <div className="parityCheck">
            <div>
              {duplicateShowNickname ? (
                duplicateNickname ? (
                  <p className="success">사용 가능한 닉네임이에요.</p>
                ) : (
                  <p className="error">사용할 수 없는 닉네임이에요.</p>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </NicknameBox>
        <BirthBox>
          <p className="title">생년월일</p>
          <p className="caption">8자리의 생년월일을 띄어쓰기 없이 입력해주세요.</p>
          <div className="inputBirth">
            <Input
              type="text"
              value={birth}
              onChange={BirthChange}
              placeholder="ex) 20010412"
            />
          </div>
        </BirthBox>

        <GenderBox>
          <p className="title">성별</p>
          <div className="Btns">
            <GenderCheckBtn
              gender={gender}
              text="MALE"
              onClick={() => setGender("MALE")}
            >
              남성
            </GenderCheckBtn>
            <GenderCheckBtn
              gender={gender}
              text="FEMALE"
              onClick={() => setGender("FEMALE")}
            >
              여성
            </GenderCheckBtn>
          </div>
        </GenderBox>

        <RegisterBtn
          disabled={registerFlag}
          onClick={RegisterOk}
        >
          회원가입 완료
        </RegisterBtn>
      </AddInfoBox>
    </Container>
  );
};

export default AddInfomation;
