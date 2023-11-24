import { useEffect } from "react";

import { useSetRecoilState } from "recoil";

import {
  getCommunityTop5,
  getMainBottom,
  getMainBubbleChart,
  getMainTop,
  getPopularContents,
} from "@/apis";
import BubbleChart from "@/components/organisms/Home/BubbleChart";
import DiscussedTopics from "@/components/organisms/Home/DiscussedTopics";
// import { LoginTopic } from "@/components/organisms/Home/LoginTopic";
import { MainCommunity } from "@/components/organisms/Home/MainCommunity";
import { MainContent } from "@/components/organisms/Home/MainContent";
import { MainTopic } from "@/components/organisms/Home/MainTopic";
import { packbubbleDummydata } from "@/dummy/packBubbleData";
import {
  BubbleChartState,
  ContentsPopularState,
  MainTopState,
  PopularCommunityState,
  TalkingHoverState,
  TalkingTopicState,
} from "@/recoil/atoms";
import { DragContainer } from "@/style/global";
import { CommunityMainProps, ContentsMainProps, TopicMainProps, mainTopicBottom } from "@/types";
const Home = () => {
  const setBubbleChartData = useSetRecoilState(BubbleChartState);
  const setMainBottomData = useSetRecoilState<mainTopicBottom[]>(TalkingTopicState);
  const setHoverData = useSetRecoilState(TalkingHoverState);
  const setMainTopData = useSetRecoilState<TopicMainProps[]>(MainTopState);

  const setPopularContents = useSetRecoilState<ContentsMainProps[]>(ContentsPopularState);

  const setCommunityData = useSetRecoilState<CommunityMainProps[]>(PopularCommunityState);

  useEffect(() => {
    getMainBubbleChart()
      .then((res) => {
        console.log(res.data);
        const obj = [...res.data.data];
        const RealObj = obj.map((item) => {
          return Object.freeze(item);
        });
        setBubbleChartData(RealObj);
      })
      .catch((err) => {
        console.log(err);
        setBubbleChartData(packbubbleDummydata);
      });

    //메인 하단
    getMainBottom()
      .then((res) => {
        console.log("res.data.data:", res.data.data);
        setMainBottomData(res.data.data);
        setHoverData(res.data.data.issueList);
      })
      .catch((err) => {
        console.log(err);
      });

    //메인 상단 주제4개
    getMainTop()
      .then((res) => {
        // console.log("top4:", res.data);
        setMainTopData(res.data.data.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });

    //
    getPopularContents()
      .then((res) => {
        // console.log(res.data);
        setPopularContents(res.data.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });

    getCommunityTop5()
      .then((res) => {
        // console.log(res.data);
        setCommunityData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [
    setBubbleChartData,
    setCommunityData,
    setHoverData,
    setMainBottomData,
    setMainTopData,
    setPopularContents,
  ]);

  return (
    <DragContainer>
      <BubbleChart />
      {/* 여러가지 메인에 들어갈 organism들 */}
      {!localStorage.getItem("accessToken") ? <MainTopic /> : ""}
      <MainContent />
      <MainCommunity />
      <DiscussedTopics />
    </DragContainer>
  );
};

export default Home;
