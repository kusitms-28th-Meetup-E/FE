import styled from "styled-components";

import bg from "@/assets/DetailTitle/detail-background.png";

const CommunityTitle = () => {
  return (
    <Container>
      <img
        src={bg}
        alt="배경이미지"
        width="100%"
        height={220}
      />
      <Cover>
        <Title>
          <p className="firstLine">지금</p>
          <p className="secondLine">우리는?</p>
        </Title>
        <div className="text">
          사회 이슈에 대한 생각을<p> 함께 나눠요</p>
        </div>
      </Cover>
    </Container>
  );
};

export default CommunityTitle;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Cover = styled.div`
  max-width: 1080px;
  width: 94.12%; // 여기 반응형 작업 잘하기
  height: 220px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .text {
    margin-top: 46px;
    position: absolute;
    right: 0;
    color: var(--Gray2_100, #f5f5f5);
    text-align: right;
    font-size: var(--text_h4);
    line-height: 42px;
    letter-spacing: -0.48px;
  }
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
