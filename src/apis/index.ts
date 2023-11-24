import axios from "axios";

import {
  CommentProps,
  addRegisterType,
  emailCodeType,
  localRegisterType,
  loginType,
} from "@/types";

const GwangjangAxios = axios.create({
  baseURL: "https://api.gwang-jang.co.kr",
});

//로그인 및 회원가입
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

// 메인페이지
export const getMainBubbleChart = async () => {
  const res = await GwangjangAxios.get("/keyword/main");
  return res;
};

// 디테일페이지
export const getDetailOneLineIntro = async () => {
  const res = await GwangjangAxios.get(`/keyword/topic/issueDetail/all`);
  return res;
};

export const getDetailLineGraph = async (name: string) => {
  const res = await GwangjangAxios.get(`/keyword/trend/${name}`);
  return res;
};

export const getDetailSubscribeCount = async (issueId: number) => {
  const res = await GwangjangAxios.get(`/member/subscribe/issue/${issueId}`);
  return res;
};

export const getDetailBubbleGraph = async (name: string) => {
  const res = await GwangjangAxios.get(`/contents/bubbleChart/${name}`);
  return res;
};

export const getKeywordArticle = async (keyword: string) => {
  const res = await GwangjangAxios.get(`/contents/keyword/${keyword}/NAVER`);
  return res;
};
export const getKeywordYoutube = async (keyword: string) => {
  const res = await GwangjangAxios.get(`/contents/keyword/${keyword}/YOUTUBE`);
  return res;
};
export const getTopicArticle = async (issue: string) => {
  const res = await GwangjangAxios.get(`/contents/issueTitle/${issue}/NAVER`);
  return res;
};
export const getTopicYoutube = async (issue: string) => {
  const res = await GwangjangAxios.get(`/contents/issueTitle/${issue}/YOUTUBE`);
  return res;
};

// 커뮤니티 페이지
export const getCommunityAllData = async () => {
  const res = await GwangjangAxios.get("/community/");
  return res;
};

export const getCommunityAreaData = async (topicId: string) => {
  const res = await GwangjangAxios.get(`/community/topic/${topicId}`);
  return res;
};

export const postCommunityItem = async (
  contentsId: number,
  writeText: string,
  accessToken: string
) => {
  const res = await GwangjangAxios.post(
    `/community/contents/${contentsId}`,
    {
      communityText: writeText,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};

export const getSubscribeTop5 = async () => {
  const res = await GwangjangAxios.get("/member/subscribe/issue");
  return res;
};

export const getCommunityDetailData = async (topicId: number, communityId: number) => {
  const res = await GwangjangAxios.get(`/community/topic/${topicId}/community/${communityId}`);
  return res;
};

export const getCommunityTop5 = async () => {
  const res = await GwangjangAxios.get("/community/?sortBy=ALL/");
  return res;
};

//검색 페이지

export const getSearch = async (keyword: string) => {
  const res = await GwangjangAxios.get(`/keyword/search/${keyword}`);
  return res;
};

export const getSearchCommunity = async (keyword: string) => {
  const res = await GwangjangAxios.get(`/community/search/${keyword}`);
  return res;
};

export const getDetailCommunity = async (issue: string) => {
  const res = await GwangjangAxios.get(`/community/sortBy/ISSUE/word/${issue}`);
  return res;
};

export const getRandomIssue = async () => {
  const res = await GwangjangAxios.get(`/keyword/random/issue`);
  return res;
};

export const postComment = async ({ topicId, communityId, talk }: CommentProps) => {
  const res = await GwangjangAxios.post(
    `/community/topic/${topicId}/community/${communityId}/comments`,
    {
      talk: talk,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    }
  );
  return res;
};

export const getComment = async ({ topicId, communityId }: CommentProps) => {
  const res = await GwangjangAxios.get(
    `/community/topic/${topicId}/community/${communityId}/comments`
  );
  return res;
};

export const getSubcribe = async ({ topicId, IssueId }: { topicId: number; IssueId: number }) => {
  const res = await GwangjangAxios.post(
    `member/topic/${topicId}/issue/${IssueId}/subscribe`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    }
  );
  return res;
};

export const getDeleteSubcribe = async ({
  topicId,
  IssueId,
}: {
  topicId: number;
  IssueId: number;
}) => {
  const res = await GwangjangAxios.delete(`member/topic/${topicId}/issue/${IssueId}/subscribe`, {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  });
  return res;
};

export const getactiveSubcribe = async ({
  topicId,
  IssueId,
}: {
  topicId: number;
  IssueId: number;
}) => {
  const res = await GwangjangAxios.get(`member/topic/${topicId}/issue/${IssueId}/subscribe`, {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  });
  return res;
};

export const getMainBottom = async () => {
  const res = await GwangjangAxios.get("/keyword/topic/all");
  return res;
};

export const getMainTop = async () => {
  const res = await GwangjangAxios.get("/member/subscribe/issue");
  return res;
};

export const getPopularContents = async () => {
  const res = await GwangjangAxios.get("/contents/contents/like");
  return res;
};

export const getIssueMainfirst = async (issue: string) => {
  const res = await GwangjangAxios.get(`/contents/issueTitle/${issue}/NAVER`, {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  });
  return res;
};

export const mySubscribe = async () => {
  const res = await GwangjangAxios.get(`member/subscribe/contents`, {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  });
  return res;
};

//내가 구독한 주제
export const getMySubscribeData = async (accessToken: string) => {
  const res = await GwangjangAxios.get("/member/subscribe", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

//좋아요한 커뮤니티 글
export const getMyLikeCommunityData = async (accessToken: string) => {
  const res = await GwangjangAxios.get("/community/mypage", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

//내가 쓴 커뮤니티 글
export const getMyWriteCommunityData = async (accessToken: string) => {
  const res = await GwangjangAxios.get("/community/mywrite", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};

export const postMyLikeContentsData = async (accessToken: string) => {
  const res = await GwangjangAxios.post(
    "/contents/my-page/like",
    {
      data: [],
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res;
};
