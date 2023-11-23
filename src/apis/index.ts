import axios from "axios";

import { addRegisterType, emailCodeType, localRegisterType, loginType } from "@/types";

const GwangjangAxios = axios.create({
  baseURL: "https://api.gwang-jang.co.kr",
});

export const postLocalLogin = async ({ id, pw }: loginType) => {
  const res = await GwangjangAxios.post("/member/auth/signIn", { id, pw });
  return res;
};

export const postKakaoLogin = async (Code: string | null) => {
  const res = await GwangjangAxios.post("/member/auth/signIn/kakao", { token: Code });
  return res;
};

export const getDuplicateId = async (userId: string) => {
  const res = await GwangjangAxios.get(`/member/auth/loginId/${userId}`);
  return res;
};

export const getDuplicateNickname = async (nickname: string) => {
  const res = await GwangjangAxios.get(`/member/auth/nickname/${nickname}`);
  return res;
};

export const postEmail = async (email: string) => {
  const res = await GwangjangAxios.post(`/member/auth/email/${email}`);
  return res;
};

export const postEmailCode = async ({ email, emailCode }: emailCodeType) => {
  const res = await GwangjangAxios.post("/member/auth/email", { email, code: emailCode });
  return res;
};

export const postLocalRegister = async ({
  userId,
  password2,
  nickname,
  gender,
  email,
  birthDate,
}: localRegisterType) => {
  const res = await GwangjangAxios.post("/member/auth/signUp", {
    id: userId,
    pw: password2,
    nickname,
    gender,
    email,
    birthDate,
  });
  return res;
};

export const putKakaoRegister = async ({
  nickname,
  gender,
  birth,
  accessToken,
}: addRegisterType) => {
  const res = await GwangjangAxios.put(
    "/member/auth/signUp/kakao",
    {
      nickname,
      gender,
      birthDate: birth,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};

export const getCommunityAllData = async () => {
  const res = await GwangjangAxios.get("/community");
  return res;
};

export const getCommunityAreaData = async (topicId: number) => {
  const res = await GwangjangAxios.get(`/community/topic/${topicId}`);
  return res;
};

//검색 페이지

export const getSearch = async (keyword: string) => {
  const res = await GwangjangAxios.get(`/keyword/search/${keyword}`);
  return res;
};

export const getSearchCommunity = async (keyword: string) => {
  const res = await GwangjangAxios.get(`/community/search/ALL/${keyword}`);
  return res;
};
