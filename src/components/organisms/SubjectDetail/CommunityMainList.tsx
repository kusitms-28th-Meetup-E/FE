import styled from "styled-components";

import { BigProfile } from "@/components/atoms/profile";
import { CommunityMain } from "@/components/molecules/communityMain";
import { mainCommunityData } from "@/dummy/mainCommunityData";

export const CommunityMainList = () => {
  return (
    <FirstWrapper>
      {mainCommunityData.map((item, idx) => {
        return (
          <CommunityMainListContainer key={idx}>
            <BigProfile
              nickname={item.nickname}
              date={item.date}
              profileImg={item.profileImg}
            />
            <CommunityMain data={item} />
          </CommunityMainListContainer>
        );
      })}
    </FirstWrapper>
  );
};

export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #eee;
`;

export const CommunityMainListContainer = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
