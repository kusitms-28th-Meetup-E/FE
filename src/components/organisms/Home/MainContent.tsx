import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { SeeMore } from "@/components/atoms/more";
import { Title } from "@/components/atoms/title";
import { ContentBox } from "@/components/molecules/main/contentbox";
// import { contentData } from "@/dummy/ContentData";
import { ContentsPopularState } from "@/recoil/atoms";
import { Inner } from "@/style/global";

export const MainContent = () => {
  // const firstData = contentData[0];
  const title = "지금 사람들이\n가장 많이 본 콘텐츠";

  const contentsData = useRecoilValue(ContentsPopularState);
  console.log("dfdf", contentsData);
  const firstData = contentsData[0];

  return (
    <Background>
      <Inner>
        <MainContentContainer>
          <div className="inner">
            <Title title={title} />
          </div>
          <ContentWrapper>
            <div className="first-item">
              <ContentBox
                key={0}
                data={firstData}
                category={""} // category={contentsData[0].topic}
              />
            </div>
            <div className="content-grid">
              {contentsData.slice(1).map((data, idx) => (
                <ContentBox
                  key={idx}
                  data={data}
                  category={""} // category={data.topic}
                />
              ))}
            </div>
          </ContentWrapper>{" "}
          <div className="inner">
            <SeeMore
              text="더보기"
              path="/login"
            />
          </div>
        </MainContentContainer>
      </Inner>
    </Background>
  );
};

const Background = styled.div`
  background-color: var(--Gray2_100);
  padding-top: 31px;
  padding-bottom: 22px;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .inner {
    width: 1080px;
    margin: 0 auto 20px;
    @media (max-width: 1080px) {
      display: flex;
      width: 100vw;
      justify-content: center;
    }
    @media (max-width: 880px) {
      width: 100vw;
    }
    @media (max-width: 564px) {
      width: 100vw;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  font-size: var(--text_h5);
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    display: flex;
    width: 100vw;
  }
  @media (max-width: 880px) {
    width: 100vw;
  }
  @media (max-width: 564px) {
    width: 100vw;
  }

  .first-item {
    display: flex;

    @media (max-width: 1080px) {
      height: 213px;
    }
  }

  .content-grid {
    display: grid;
    height: 504px;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    /* font-size: var(--text_b1); */

    @media (max-width: 1080px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (max-width: 880px) {
      display: flex;
      flex-wrap: wrap;
      height: auto;

      > div {
        height: 213px;
      }
    }

    @media (max-width: 564px) {
      height: auto;

      > div {
        height: 213px;
      }
    }
  }
`;
