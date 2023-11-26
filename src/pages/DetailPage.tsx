/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import styled from "styled-components";

import { getDetailOneLineIntro, getDetailSubscribeCount, getSubscribeTop5 } from "@/apis";
import Loading from "@/components/atoms/Loading";
import ChallengeToast from "@/components/atoms/toast";
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
import {
  ShowModalState,
  ToastState,
  bubbleGraphState,
  detailPageKeyword,
  detailTitleState,
  loadingState,
} from "@/recoil/atoms";
//import { BubbleGraphProps } from "@/types";

const DetailPage = () => {
  //모달 show 여부
  const Show = useRecoilValue(ShowModalState);
  const Toast = useRecoilValue(ToastState);
  const setDetailTitle = useSetRecoilState(detailTitleState);
  const setBubbleGraphData = useSetRecoilState(bubbleGraphState);
  const { id } = useParams();
  const [loading, setLoading] = useRecoilState(loadingState);
  //const loading2 = useRecoilValue(loading2State);
  const setDetailPageKeyword = useSetRecoilState(detailPageKeyword);

  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const name = decodeURI(decodeURIComponent(id || ""));
    setDetailPageKeyword("");
    getDetailOneLineIntro() // detailTitle
      .then((res) => {
        const obj = [...res.data.data];
        const arr = obj.map((item) => {
          return Object.freeze(item);
        });
        const brr = arr.filter((item: { issueTitle: string }) => item.issueTitle === name);
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
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setDetailTitle(detailTitleData);
      });
    getSubscribeTop5()
      .then((res) => {
        setSimilar(res.data.data.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setBubbleGraphData, setDetailPageKeyword, setDetailTitle, setLoading]);

  return (
    <>
      {Toast ? <ChallengeToast message="로그인을 진행해 주세요" /> : ""}
      {!loading ? (
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
                <SimilarTopic data={similar} />
              </>
            ) : (
              <>
                <SimilarTopic data={similar} />
                <CommunityPreview />
              </>
            )}
          </Bottom>
          {Show ? <QuotModal /> : ""}
        </>
      ) : (
        <Loading />
      )}
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
