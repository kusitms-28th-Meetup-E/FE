import React, { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

export interface loginType {
  id: string;
  pw: string;
}
export interface emailCodeType {
  email: string;
  emailCode: string;
}
export interface localRegisterType {
  userId: string;
  password2: string;
  nickname: string;
  gender: string;
  email: string;
  birthDate: string;
}
export interface addRegisterType {
  nickname: string;
  gender: string;
  birth: string;
  accessToken: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // 다른 버튼 관련 프로퍼티 추가
}

export interface CategoryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected: boolean;
}

export interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  errorLine?: boolean;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export interface discussedTopicProps {
  title: string;
  subTitles: string[];
  idx: number;
}
[];

export interface TitleProps {
  title: string;
}

export interface SeeMoreProps {
  text: string;
  path: string;
}

export interface ContentDataProps {
  category: string;
  keyword: string[];
  type: string;
  title: string;
  imgUrl: string;
  content: string;
  link: string;
}

export interface SubjectProps {
  title: string;
  imgUrl: string;
  subscribeCount: number;
  category: string;
}

export interface ProfileProps {
  nickname?: string;
  profileImg?: string;
  date?: string;
}

export interface SlideItemProps {
  title: string;
  type: string;
  date: string;
}

export interface semiDataProps {
  title: string;
  type: string;
  date: string;
}

export interface ArticleDataProps {
  data: {
    title: string;
    type: string;
    image: string;
    date: string;
    likeCount: number;
    quotCount: number;
  }[];
}

export interface ArticleItemProps {
  title: string;
  type: string;
  image?: string;
  date: string;
  likeCount?: number;
  quotCount?: number;
}

export interface CommunityPostProps {
  id: number;
  profileImg?: string;
  nickname?: string;
  area: string;
  topic: string;
  keyword: string;
  date?: string;
  likeCount: number;
  commentCount: number;
  communityText: string;
  quotText: string;
}
