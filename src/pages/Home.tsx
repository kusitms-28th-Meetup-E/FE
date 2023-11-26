import { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  getCommunityTop5,
  getMainBottom,
  getMainBubbleChart,
  getMainTop,
  getPopularContents,
  mySubscribe,
} from "@/apis";
import Loading from "@/components/atoms/Loading";
import BubbleChart from "@/components/organisms/Home/BubbleChart";
import DiscussedTopics from "@/components/organisms/Home/DiscussedTopics";
// import { LoginTopic } from "@/components/organisms/Home/LoginTopic";
import { LoginTopic } from "@/components/organisms/Home/LoginTopic";
import { MainCommunity } from "@/components/organisms/Home/MainCommunity";
import { MainContent } from "@/components/organisms/Home/MainContent";
import { MainTopic } from "@/components/organisms/Home/MainTopic";
import { QuotModal } from "@/components/organisms/Modal/QuotModal";
import { packbubbleDummydata } from "@/dummy/packBubbleData";
import {
  BubbleChartState,
  ContentsPopularState,
  MainTopState,
  PopularCommunityState,
  ShowModalState,
  TalkingHoverState,
  TalkingTopicState,
  loadingState,
} from "@/recoil/atoms";
import { DragContainer } from "@/style/global";
import { CommunityMainProps, ContentsMainProps, TopicMainProps, mainTopicBottom } from "@/types";
const Home = () => {
  const setBubbleChartData = useSetRecoilState(BubbleChartState);
  const setMainBottomData = useSetRecoilState<mainTopicBottom[]>(TalkingTopicState);
  const setHoverData = useSetRecoilState(TalkingHoverState);
  const setMainTopData = useSetRecoilState<TopicMainProps[]>(MainTopState);
  const Show = useRecoilValue(ShowModalState);

  const setPopularContents = useSetRecoilState<ContentsMainProps[]>(ContentsPopularState);

  const setCommunityData = useSetRecoilState<CommunityMainProps[]>(PopularCommunityState);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCate, setSelectedCate] = useState<number>(0);
  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    getMainBubbleChart()
      .then((res) => {
        const obj = [...res.data.data];
        const RealObj = obj.map((item) => {
          return Object.freeze(item);
        });
        setBubbleChartData(RealObj);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setBubbleChartData(packbubbleDummydata);
      });

    //메인 하단
    getMainBottom()
      .then((res) => {
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

    mySubscribe().then((res) => {
      setSelectedCate(res.data.data.length);
    });
  }, [
    setBubbleChartData,
    setCommunityData,
    setHoverData,
    setLoading,
    setMainBottomData,
    setMainTopData,
    setPopularContents,
  ]);

  return (
    <>
      {!loading ? (
        <DragContainer>
          <BubbleChart />
          {!localStorage.getItem("accessToken") ? (
            <MainTopic />
          ) : selectedCate !== 0 ? (
            <LoginTopic />
          ) : (
            <MainTopic />
          )}
          <MainContent />
          <MainCommunity />
          <DiscussedTopics />
          {Show ? <QuotModal /> : ""}
        </DragContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Home;
