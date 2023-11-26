import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { getKeywordArticle, getTopicArticle } from "@/apis";
import { SubTitle } from "@/components/atoms/title";
import { ArticleCarousel } from "@/components/molecules/carousel/ArticleCarousel";
//import { articleData } from "@/dummy/articleData";
import { detailPageKeyword, loading2State } from "@/recoil/atoms";
import { areaState } from "@/recoil/atoms";
import { ArticleDataProps } from "@/types";
//import { ArticleDataProps } from "@/types";

export const KeywordArticle = () => {
  const { id } = useParams();
  const area = useRecoilValue(areaState);

  const name = decodeURI(decodeURIComponent(id || ""));
  const [loading2, setLoading2] = useRecoilState(loading2State);

  const DetailPageKeyword = useRecoilValue(detailPageKeyword);
  const [articleData, setArticleData] = useState<ArticleDataProps[]>([]);
  const [keywordArticleData, setKeywordArticleData] = useState<ArticleDataProps[]>([]);
  useEffect(() => {
    getTopicArticle(name, "NAVER")
      .then((res) => {
        setArticleData(res.data.data);
        setLoading2(false);
      })
      .catch((err) => {
        console.log(err);
      });
    if (name !== "") {
      getKeywordArticle(DetailPageKeyword, "NAVER")
        .then((res) => {
          setKeywordArticleData(res.data.data);
          setLoading2(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [DetailPageKeyword, name, setLoading2]);

  return (
    <>
      {!loading2 ? (
        <Background $area={area}>
          {(keywordArticleData.length || articleData.length) && (
            <>
              <div className="inner">
                <div className="keyword-text">
                  <p>{!DetailPageKeyword ? name : DetailPageKeyword}</p>(이)가 더 궁금하다면?
                </div>
                <SubTitle title="관련 기사로 더 알아보세요" />
              </div>
              <div>
                <ArticleCarousel
                  data={DetailPageKeyword === "" ? articleData : keywordArticleData}
                />
              </div>
            </>
          )}
        </Background>
      ) : (
        ""
      )}
    </>
  );
};

const Background = styled.div<{ $area: string }>`
  background-color: var(--Gray3_200);
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
  gap: 20px;

  .inner {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    gap: 16px;
    flex-direction: column;

    .keyword-text {
      display: flex;
      color: var(--Gray10_900, #212121);
      font-size: var(--text_h4);
      font-weight: 700;
      line-height: 42px;
      letter-spacing: -0.48px;

      p {
        color: inherit;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        box-shadow: ${(props) =>
          props.$area === "환경"
            ? "inset 0 -9px 0 #1ae276;"
            : props.$area === "일자리·노동"
            ? "inset 0 -9px 0 #0084FF;"
            : props.$area === "교육"
            ? "inset 0 -9px 0 #FF9900;"
            : props.$area === "주거·사회 안전망"
            ? "inset 0 -9px 0 #7755FF;"
            : ""};
      }
    }

    @media (max-width: 1080px) {
      display: flex;
      width: 770px;
      align-items: center;
    }
    @media (max-width: 880px) {
      width: 600px;
      align-items: center;
    }
    @media (max-width: 564px) {
      width: 350px;
      align-items: center;
    }
  }
`;
