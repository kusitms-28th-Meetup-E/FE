import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { Title } from "@/components/atoms/title";
import { TopicBox } from "@/components/molecules/main/topicbox";
// import { subjectData } from "@/dummy/subjectData";
import { MainTopState } from "@/recoil/atoms";
import { Inner } from "@/style/global";

export const MainTopic = () => {
  const title = " 광장에서 가장\n인기 있는 사회 이슈";

  const mainTopicData = useRecoilValue(MainTopState);
  console.log(mainTopicData);

  return (
    <Background>
      <Inner>
        <MainTopicContainer>
          <div className="inner">
            <Title title={title} />
          </div>
          <TopicWrapper>
            {mainTopicData.map((data, idx) => (
              <TopicBox
                key={idx}
                title={data?.title}
                subscribeCount={data?.subscribeCount}
                imgUrl={data?.imgUrl}
                category={data?.category}
              />
            ))}
          </TopicWrapper>{" "}
          <div className="inner">
            {/* <SeeMore
              text="관심 콘텐츠 더보기"
              path="/login"
            /> */}
          </div>
        </MainTopicContainer>
      </Inner>
    </Background>
  );
};

const Background = styled.div`
  background-color: var(--Gray2_100);
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

const MainTopicContainer = styled.div`
  display: flex;
  justify-content: center;
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

const TopicWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    & > div {
      flex: 0 0 calc(40% - 12px);
      margin-bottom: 12px;
    }
  }

  @media (max-width: 880px) {
    display: flex;
    flex-wrap: wrap;
    width: 560px;
    justify-content: center;
    margin: 0 auto;
    & > div {
      /* flex: 0 0 calc(100% - 12px); */
      flex: 0 0 100%;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 564px) {
    flex-wrap: wrap;
    width: 340px;
    justify-content: center;
    margin: 0 auto;
    & > div {
      /* flex: 0 0 calc(100% - 12px); */
      flex: 0 0 100%;
      margin-bottom: 12px;
    }
  }
`;
