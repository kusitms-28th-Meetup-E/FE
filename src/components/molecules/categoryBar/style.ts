import styled from "styled-components";

export const CategoryBarContainer = styled.div`
  display: flex;
  background: var(--Gray1_50, #fafafa);
  gap: 30px;
  height: 92px;
  text-align: center;
  align-items: flex-end;
  width: 1080px;
  margin: 0 auto;
  padding: 0px 10px;
  box-sizing: border-box;

  .area-wrapper {
    .tab {
      height: inherit;
      cursor: pointer;
      display: flex;
      gap: 5px;
      align-items: center;
      color: var(--Gray6_500, #959595);
      font-size: var(--text_b1);
      line-height: 28px;
      letter-spacing: -0.27px;

      .circle {
        background-color: ${(props) => props.color};
        width: 9px;
        height: 9px;
        border-radius: 100%;
      }

      p {
        padding: 0px 4px;
        box-sizing: border-box;
        font-weight: 600;
        max-width: 100%;
      }
    }

    .tab-focused {
      height: 100%;
      /* border-bottom: 2px solid var(--Gray10_900); */
      display: flex;
      gap: 5px;
      align-items: center;
      color: var(--Gray10_900, #212121);
      font-size: var(--text_b1);
      line-height: 28px;
      letter-spacing: -0.27px;

      div {
        width: 9px;
        height: 9px;
        border-radius: 100%;
      }

      p {
        display: flex;
        padding: 0px 4px;
        box-sizing: border-box;
        font-weight: 600;
      }
    }

    .focus-bottom {
      margin-top: 13px;
      border-bottom: 2px solid var(--Gray10_900);
    }
    .not-focused {
      margin-top: 13px;
      border-bottom: 2px solid var(--Gray1_50);
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
