import BubbleChart from "@/components/organisms/Home/BubbleChart";
import DiscussedTopics from "@/components/organisms/Home/DiscussedTopics";
import { LoginTopic } from "@/components/organisms/Home/LoginTopic";
import { MainCommunity } from "@/components/organisms/Home/MainCommunity";
import { MainContent } from "@/components/organisms/Home/MainContent";
import { MainTopic } from "@/components/organisms/Home/MainTopic";
import { KeywordArticle } from "@/components/organisms/detail/KeywordArticle";

import { KeywordVideo } from "@/components/organisms/detail/keywordVideo";
import { SubjectDetailPage } from "./SubjectDetailPage";

const Home = () => {
  return (
    <>
      <BubbleChart />
      {/* 여러가지 메인에 들어갈 organism들 */}
      <MainTopic />
      <MainContent />
      <MainCommunity />
      <DiscussedTopics />
      <LoginTopic />
      <KeywordArticle />
      <KeywordVideo />
      <SubjectDetailPage />
    </>
  );
};

export default Home;
