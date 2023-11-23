import styled from "styled-components";

import bg from "@/assets/DetailTitle/detail-background.png";
import { DetailCommunityBox } from "@/components/molecules/detailCommunityBox";
import { CommunityItemProps } from "@/types";

const DetailCommunityTitle = ({ data }: { data: CommunityItemProps }) => {
  return (
    <Container>
      <img
        src={bg}
        alt="배경이미지"
        width="100%"
        height={220}
      />
      <DetailCommunityBox data={data} />
    </Container>
  );
};

export default DetailCommunityTitle;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;
