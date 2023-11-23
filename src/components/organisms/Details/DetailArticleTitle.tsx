import { useRecoilValue } from "recoil";
import styled from "styled-components";

import bg from "@/assets/DetailTitle/detail-background.png";
import DetailTitle from "@/components/molecules/DetailTitle";
import { detailTitleState } from "@/recoil/atoms";
export const DetailArticleTitle = () => {
  const detailTitleData = useRecoilValue(detailTitleState);
  return (
    <Container>
      <img
        src={bg}
        alt="배경이미지"
        width="100%"
        height={220}
      />
      <DetailTitle data={detailTitleData} />
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  position: relative;
`;
