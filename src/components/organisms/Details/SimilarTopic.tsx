import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import next from "@/assets/bottom_arrow.svg";
import { SimilarTopicBox } from "@/components/molecules/longTopicBox";
import { areaState } from "@/recoil/atoms";
import { SimilarTopicProps } from "@/types";

const SimilarTopic = ({ data }: { data: SimilarTopicProps[] }) => {
  const { id } = useParams();
  const area = useRecoilValue(areaState);

  const name = decodeURI(decodeURIComponent(id || ""));

  return (
    <Container $area={area}>
      <div className="keyword-text">
        <div className="title-top">
          <p>{name}</p> 와
        </div>
        <div>이런 주제도 있어요</div>
      </div>

      <TopicWraaper>
        <div className="TopicBoxes">
          {data?.map((el) => {
            return <SimilarTopicBox data={el} />;
          })}
        </div>
        <DifferentTopicBtn>
          <p>다른 사회 이슈도 둘러보세요.</p>
          <img
            src={next}
            alt=">"
          />
        </DifferentTopicBtn>
      </TopicWraaper>
    </Container>
  );
};

export default SimilarTopic;

const Container = styled.div<{ $area: string }>`
  .keyword-text {
    padding: 0 24px;
    margin-bottom: 20px;
    /* width: 400px; */
    display: flex;
    flex-direction: column;
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;

    .title-top {
      display: flex;

      @media (max-width: 800px) {
        justify-content: center;
      }
    }

    p {
      font-weight: 700;
      color: inherit;
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
      margin-right: 5px;
    }

    @media (max-width: 800px) {
      display: flex;
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
  }
`;
const TopicWraaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.6);
  .TopicBoxes {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 800px) {
    width: fit-content;
    padding: 24px;
    margin: 0 auto;
  }
`;

const DifferentTopicBtn = styled.div`
  margin: 29px 0 26px;
  padding: 14px 21px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: flex;
  border-radius: 55px;
  background-color: var(--Gray2_100, #f5f5f5);
  width: fit-content;
  box-sizing: border-box;
  color: var(--Gray8_700, #616161);
  cursor: pointer;

  img {
    transform: rotate(-90deg);
  }
`;
