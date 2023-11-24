import styled from "styled-components";

import PopularCommunityBox from "@/components/molecules/PopularCommunityBox";
import { PopularCommunityProps } from "@/types";

const CommunityPopular = ({ data }: { data: PopularCommunityProps[] }) => {
  return (
    <PopularWraaper>
      <div className="title">
        <p className="first">인기 있는 커뮤니티 글 top 5</p>
        <p className="second">이번 주 광장에서 가장 인기 있는 글이에요</p>
      </div>
      <div className="TopicBoxes">
        {data.map((item, idx) => {
          return (
            <div className="box">
              <p>{idx + 1}위</p>
              <PopularCommunityBox data={item} />
            </div>
          );
        })}
      </div>
    </PopularWraaper>
  );
};

export default CommunityPopular;
const PopularWraaper = styled.div`
  height: fit-content;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--Gray1_50, #fafafa);
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 30px;

  border-radius: 5px;
  margin: 89px 0 30px;

  @media (max-width: 1150px) {
    height: 380px;
  }

  @media (max-width: 800px) {
    margin: 50px 0px 0px 0px;
  }

  .title {
    margin-bottom: 22px;
  }
  .title .first {
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h6);
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.3px;
  }
  .title .second {
    color: var(--Gray6_500, #959595);
    font-size: var(--text_b3);
    line-height: 27px;
    letter-spacing: -0.21px;
  }
  .TopicBoxes {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    p {
      font-size: var(--text_b3);
      line-height: 18px;
    }
  }
`;
