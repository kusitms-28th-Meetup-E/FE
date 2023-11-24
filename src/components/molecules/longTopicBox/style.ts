import styled from "styled-components";

export const Container = styled.div<{ $string: string }>`
  position: relative;
  width: ${(props) => (props.$string === "similar" ? "296px" : "273px")};
  border-radius: 5px;
  opacity: 0.8;
  background-color: #343434;
  cursor: pointer;
  @media (max-width: 1150px) {
    height: 120px;
  }
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: var(--text_h6);
  font-weight: 600;
  line-height: 24px;
  padding: 18px 18px 0;
  box-sizing: border-box;
`;

export const Bottom = styled.div`
  display: flex;

  color: var(--Gray3_200, #eee);
  font-size: var(--text_b3);
  line-height: 22px;
  margin-top: 28px;
  padding: 0 18px 18px;
  p {
    color: var(--Gray2_100, #f5f5f5);
    font-weight: 700;
  }
`;

export const Middle = styled.div`
  padding: 15px 15px 15px;
  height: fit-content;

  .title {
    color: #fff;
    font-size: var(--text_b2);
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.24px;
    margin-bottom: 8px;

    @media (max-width: 1150px) {
      margin-bottom: 37px;
    }
  }
`;
