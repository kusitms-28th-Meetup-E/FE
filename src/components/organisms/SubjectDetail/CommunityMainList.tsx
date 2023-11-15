import styled from "styled-components";

import { BigProfile } from "@/components/atoms/profile";
import { CommunityMain } from "@/components/molecules/communityMain";

export const CommunityMainList = () => {
  return (
    <CommunityMainListContainer>
      <BigProfile
        nickname="chaemin"
        date="2001.04.30"
        profileImg=""
      />
      <CommunityMain />
    </CommunityMainListContainer>
  );
};

export const CommunityMainListContainer = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
