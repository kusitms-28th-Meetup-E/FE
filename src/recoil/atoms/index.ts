import { atom, selector } from "recoil";

import { mySubjectData } from "@/dummy/mySubjectData";
import {
  ArticleDataProps,
  BubbleGraphProps,
  CommunityMainProps,
  ContentsMainProps,
  DetailTitleProps,
  TopicMainProps,
  lineGraphProps,
  mainTopicBottom,
  packBubbleProps,
} from "@/types";

import persistAtom from "./persistAtom";

export const accessTokenState = atom({
  // accessToken 임시 저장 카카오로그인 후, 추가 정보 기입할 때 가져가는 accesstoken 로컬스토리지에 저장하면 안됨.
  key: "src/atoms/auth.tsx-accessTokenState",
  default: "",
});

//선택된 카테고리를 저장할 atom
export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: mySubjectData.category[0],
});

//카테고리 기반 데이터 필터링하는 selector
export const filteredDataSelector = selector({
  key: "filteredDataSelector",
  get: ({ get }) => {
    const selectedCategory = get(selectedCategoryState);
    return (
      mySubjectData.data.find((categoryData) => categoryData.category === selectedCategory)
        ?.semiData || []
    );
  },
});

//마이페이지 탭
export const selectedTabState = atom({
  key: "selectedTabState",
  default: 0,
});

export const modalState = atom<ArticleDataProps>({
  key: "src/atoms/auth.tsx-modalState",
  default: {
    contents_id: 0,
    description: "",
    imgUrl: "",
    issueTitle: "",
    keyword: "",
    pubDate: "",
    title: "",
    topic: "",
    type: "",
    url: "",
  },
});

export const ShowModalState = atom({
  key: "src/atoms/auth.tsx-ShowModalState",
  default: false,
});

export const areaState = atom({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-areaState",
  default: "",
});

export const searchTextState = atom({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-searchTextState",
  default: "",
  effects: [persistAtom],
});

export const searchResultState = atom({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-searchResultState",
  default: "",
  effects: [persistAtom],
});

export const BubbleChartState = atom<packBubbleProps[]>({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-BubbleChartState",
  default: [],
});

export const detailTitleState = atom<DetailTitleProps>({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-detailTitleState",
  default: {
    category: "",
    title: "",
    count: 0,
    oneline: "",
    id: 0,
  },
});
export const LineGraphState = atom<lineGraphProps[]>({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-LineGraphState",
  default: [],
});
export const bubbleGraphState = atom<BubbleGraphProps[]>({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-bubbleGraphState",
  default: [],
});
export const detailPageKeyword = atom({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-detailPageKeyword ",
  default: "",
});

export const loadingState = atom({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-loadingState ",
  default: true,
});

export const topDateState = atom({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-topDateState ",
  default: "",
});

export const ToastState = atom({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-ToastState ",
  default: false,
});

export const subscriber = atom({
  // 주제뱔 상세페이지 접속시, 쿼리스트링의 영역값을 저장
  key: "src/atoms/auth.tsx-subscriber ",
  default: 0,
});
export const TalkingTopicState = atom<mainTopicBottom[]>({
  key: "src/atoms/auth.tsx-TalkingTopicState",
  default: [],
});

export const TalkingHoverState = atom({
  key: "src/atoms/auth.tsx-TalkingHoverState",
  default: [],
});

export const MainTopState = atom<TopicMainProps[]>({
  key: "src/atoms/auth.tsx-MainTopState",
  default: [],
});

export const ContentsPopularState = atom<ContentsMainProps[]>({
  key: "src/atoms/auth.tsx-ContentsPopularState",
  default: [],
});

export const PopularCommunityState = atom<CommunityMainProps[]>({
  key: "src/atoms/auth.tsx-PopularCommunityState",
  default: [],
});
