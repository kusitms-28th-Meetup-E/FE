import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { BubbleGraph } from "@/components/organisms/Details/BubbleGraph";
import { CommunityPreview } from "@/components/organisms/Details/CommunityPreview";
import { DetailArticleTitle } from "@/components/organisms/Details/DetailArticleTitle";
import { KeywordArticle } from "@/components/organisms/Details/KeywordArticle";
import { LineGraph } from "@/components/organisms/Details/LineGraph";
import SimilarTopic from "@/components/organisms/Details/SimilarTopic";
import { KeywordVideo } from "@/components/organisms/Details/keywordVideo";
import { QuotModal } from "@/components/organisms/Modal/QuotModal";
import { similartopicData } from "@/dummy/similartopicData";
import { ShowModalState } from "@/recoil/atoms";

const DetailPage = () => {
  const Show = useRecoilValue(ShowModalState);
  //const data = useRecoilValue(modalState);
  return (
    <>
      <DetailArticleTitle />
      <BubbleGraph />
      <LineGraph />
      <KeywordArticle />
      <KeywordVideo />
      <Bottom>
        <CommunityPreview />
        <SimilarTopic data={similartopicData} />
      </Bottom>
      {Show ? <QuotModal /> : ""}
    </>
  );
};

export default DetailPage;

const Bottom = styled.div`
  background-color: var(--Gray2_100);
  padding-top: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding-bottom: 66px;
`;
