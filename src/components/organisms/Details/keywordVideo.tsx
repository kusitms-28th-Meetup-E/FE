import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { getKeywordYoutube, getTopicYoutube } from "@/apis";
import { SubTitle } from "@/components/atoms/title";
import { ArticleCarousel } from "@/components/molecules/carousel/ArticleCarousel";
//import { tempVideoData } from "@/dummy/tempVideoData";
import { detailPageKeyword } from "@/recoil/atoms";
import { ArticleDataProps } from "@/types";

export const KeywordVideo = () => {
  const { id } = useParams();

  const name = decodeURI(decodeURIComponent(id || ""));
  const DetailPageKeyword = useRecoilValue(detailPageKeyword);
  const [YoutubeData, setYoutubeData] = useState<ArticleDataProps[]>([]);
  const [keywordYoutubeData, setKeywordYoutubeData] = useState<ArticleDataProps[]>([]);

  useEffect(() => {
    getTopicYoutube(name, "YOUTUBE")
      .then((res) => {
        setYoutubeData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (DetailPageKeyword !== "") {
      getKeywordYoutube(DetailPageKeyword, "YOUTUBE")
        .then((res) => {
          setKeywordYoutubeData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [DetailPageKeyword, name]);

  return (
    <>
      <Background>
        {(keywordYoutubeData.length || YoutubeData.length) && (
          <>
            <div className="inner">
              <SubTitle title="관련 영상으로 더 알아보세요" />
            </div>
            <div>
              <ArticleCarousel data={DetailPageKeyword === "" ? YoutubeData : keywordYoutubeData} />
            </div>
          </>
        )}
      </Background>
    </>
  );
};

const Background = styled.div`
  background-color: var(--Gray3_200);
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
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
        box-shadow: inset 0 -12px 0 #1ae276;
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
