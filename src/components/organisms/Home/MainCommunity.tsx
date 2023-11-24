import styled from "styled-components";

import { SeeMore } from "@/components/atoms/more";
import { Title } from "@/components/atoms/title";
import { CommunityBox } from "@/components/molecules/main/communitybox";

export const MainCommunity = () => {
  const title = "지금 가장 인기있는\n커뮤니티 글";

  return (
    <TempInner>
      <MainCommunityBack>
        <div className="inner">
          <Title title={title} />
        </div>
        <CommunityBox />
        <div className="inner">
          <SeeMore
            text="더보기"
            path="/community"
          />
        </div>
      </MainCommunityBack>
    </TempInner>
  );
};

const MainCommunityBack = styled.div`
  /* width: 1440px; */
  width: 100%;
  /* margin-left: 180px; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 50px 0px;

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

const TempInner = styled.div`
  background: var(--Gray4_300, #d9d9d9);
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
