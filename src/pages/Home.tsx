import { useEffect } from "react";

import { useSetRecoilState } from "recoil";

import { getMainBubbleChart } from "@/apis";
import BubbleChart from "@/components/organisms/Home/BubbleChart";
import DiscussedTopics from "@/components/organisms/Home/DiscussedTopics";
import { LoginTopic } from "@/components/organisms/Home/LoginTopic";
import { MainCommunity } from "@/components/organisms/Home/MainCommunity";
import { MainContent } from "@/components/organisms/Home/MainContent";
import { MainTopic } from "@/components/organisms/Home/MainTopic";
import { packbubbleDummydata } from "@/dummy/packBubbleData";
import { BubbleChartState } from "@/recoil/atoms";
import { DragContainer } from "@/style/global";
const Home = () => {
  const setBubbleChartData = useSetRecoilState(BubbleChartState);
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
  }, [setBubbleChartData]);
  return (
    <DragContainer>
      <BubbleChart />
      {/* 여러가지 메인에 들어갈 organism들 */}
      {!localStorage.getItem("accessToken") ? <MainTopic /> : <LoginTopic />}
      <MainContent />
      <MainCommunity />
      <DiscussedTopics />
    </DragContainer>
  );
};

export default Home;
