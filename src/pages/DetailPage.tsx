/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { getDetailOneLineIntro, getDetailSubscribeCount } from "@/apis";
import { BubbleGraph } from "@/components/organisms/Details/BubbleGraph";
import { CommunityPreview } from "@/components/organisms/Details/CommunityPreview";
import { DetailArticleTitle } from "@/components/organisms/Details/DetailArticleTitle";
import { KeywordArticle } from "@/components/organisms/Details/KeywordArticle";
import { LineGraph } from "@/components/organisms/Details/LineGraph";
import SimilarTopic from "@/components/organisms/Details/SimilarTopic";
import { KeywordVideo } from "@/components/organisms/Details/keywordVideo";
import { QuotModal } from "@/components/organisms/Modal/QuotModal";
//import { bubbleDummydata } from "@/dummy/bubbleData";
import { detailTitleData } from "@/dummy/detailTitleData";
//import { lineDummydata } from "@/dummy/lineData";
import { similartopicData } from "@/dummy/similartopicData";
import { ShowModalState, bubbleGraphState, detailTitleState } from "@/recoil/atoms";
//import { BubbleGraphProps } from "@/types";

const DetailPage = () => {
  //모달 show 여부
  const Show = useRecoilValue(ShowModalState);
  const setDetailTitle = useSetRecoilState(detailTitleState);
  const setBubbleGraphData = useSetRecoilState(bubbleGraphState);
  const { id } = useParams();

  useEffect(() => {
    const name = decodeURI(decodeURIComponent(id || ""));
    getDetailOneLineIntro() // detailTitle
      .then((res) => {
        console.log(name);
        console.log(res.data);
        const obj = [...res.data.data];
        const arr = obj.map((item) => {
          return Object.freeze(item);
        });
        const brr = arr.filter((item: { issueTitle: string }) => item.issueTitle === name);
        console.log(brr);
        const objectTitle = brr[0];

        //구독자수
        getDetailSubscribeCount(brr[0]?.issueId)
          .then((res) => {
            setDetailTitle({
              category: objectTitle.topicTitle,
              title: objectTitle.issueTitle,
              count: res.data.data?.subscribers,
              oneline: objectTitle.issueDetail,
              id: objectTitle.issueId,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setDetailTitle(detailTitleData);
      });
    // getDetailBubbleGraph(name)
    //   .then((res) => {
    //     console.log(res.data.data);
    //     const obj = [...res.data.data];
    //     const RealObj = obj.map((item: any) => {
    //       return Object.freeze(item);
    //     });
    //     setBubbleGraphData(RealObj);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setBubbleGraphData(bubbleDummydata);
    //   });
  }, [id, setBubbleGraphData, setDetailTitle]);

  return (
    <>
      <DetailArticleTitle />
      <BubbleGraph />
      <LineGraph />
      <KeywordArticle />
      <KeywordVideo />
      <Bottom>
        {window.innerWidth > 800 ? (
          <>
            <CommunityPreview />
            <SimilarTopic data={similartopicData} />
          </>
        ) : (
          <>
            <SimilarTopic data={similartopicData} />
            <CommunityPreview />
          </>
        )}
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

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }
`;
