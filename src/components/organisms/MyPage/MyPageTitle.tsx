import styled from "styled-components";

import bg from "@/assets/DetailTitle/detail-background.png";

export const MyPageTitle = () => {
  return (
    <Container>
      <img
        src={bg}
        alt="배경이미지"
        width="100%"
        height={140}
      />
      <Cover>
        <Title>
          <p className="firstLine">마이페이지</p>
        </Title>
      </Cover>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Cover = styled.div`
  max-width: 1080px;
  width: 94.12%;
  height: 140px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  p {
    background-color: var(--Gray1_50, #fafafa);
    width: fit-content;
    padding-left: 13px;
    padding-right: 11px;
  }

  p.firstLine {
    padding-bottom: 0;
  }
  color: var(--Gray10_900, #212121);
  font-weight: 900;
  line-height: 63px;
  letter-spacing: -0.72px;
  font-size: 3rem;
  position: absolute;
  bottom: 0;

  @media (max-width: 400px) {
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    font-size: 1.3rem;
  }
`;
