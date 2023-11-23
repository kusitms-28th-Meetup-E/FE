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
export interface SubscribeButtonProps {
  onClick?: () => void;
  onOff: boolean;
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
  keyword: string;
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
  nickname: string;
  profileImg: string;
  date: string;
}

export interface DetailTitleProps {
  category: string;
  title: string;
  count: number;
  oneline: string;
  id: number;
}

export interface SlideItemProps {
  title: string;
  type: string;
  date: string;
}

export interface semiDataProps {
  title: string;
  type: string;
  nickname?: string;
  profileImg?: string;
  date: string;
}

export interface ArticleDataProps {
  contents_id?: string;
  description?: string;
  imgUrl: string;
  issueTitle?: string;
  keyword?: string;
  pubDate: string;
  title: string;
  topic?: string;
  type: string;
  url: string;
} // 좋아요 수 넣기

export interface ArticleItemProps {
  title: string;
  type: string;
  image?: string;
  date: string;
  likeCount?: number;
  quotCount?: number;
  contents_id?: number;
}

export interface ContentsItemProps {
  contents_id: number;
  url: string;
  title: string;
  description: string;
  type: string;
  issueTitle: string;
  pubDate: string;
}

export interface CategoryBarProps {
  onSelectTab: (idx: number) => void;
}

export interface CommunityItemProps {
  id: number;
  communityText: string;
  date: string;
  writerId: string;
  nickname: string;
  profileImg: string;
  area: string;
  subject: string;
  keyword: string;
  likeCount: number;
  commentCount: number;
  contentsId: number;
  contents: null;
  contentsTitle: string;
  contentsUrl: string;
  likeStatus: string;
  quotText: string;
}

export interface CommentItemProps {
  data: {
    talk: string;
    createAt: string;
    writerId: string;
    nickname: string;
    profileImg: string;
  }[];
}
export interface SimilarTopicesProps {
  id: number;
  topic: string;
  item: SimilarTopicProps[];
}

export interface SimilarTopicProps {
  subscribeCount: number;
  topic: string;
  area: string;
}
export interface ToptopicProps {
  id: number;
  area: string;
  subject: string;

  //
  category: string;
  imgUrl: string;
  title: string;
}

export interface PopularCommunityProps {
  id: number;
  communityText: string;
  date: string;
  writerId: string;
  nickname: string;
  profileImg: string;
  area: string;
  subject: string;
  keyword: string;
  likeCount: number;
  commentCount: number;
  contentsId: number;
  contents: null;
}

export interface ToptopicProps {
  id: number;
  area: string;
  subject: string;
}

export interface PopularCommunityProps {
  id: number;
  communityText: string;
  date: string;
  writerId: string;
  nickname: string;
  profileImg: string;
  area: string;
  subject: string;
  keyword: string;
  likeCount: number;
  commentCount: number;
  contentsId: number;
  contents: null;
}

export interface SearchTopicProps {
  id: number;
  category: string;
  title: string;
  count: number;
  oneline: string;
  img: string;
}

export interface packBubbleProps {
  name: string;
  data: {
    name: string;
    value: number;
    id?: number;
  }[];
}

export interface lineGraphProps {
  name: string;
  y: number;
}

export interface BubbleGraphProps {
  x: number;
  y: number | null;
  z: number;
  name: string;
}
