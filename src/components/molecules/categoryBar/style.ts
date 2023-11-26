import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (max-width: 565px) {
    justify-content: flex-end;
  }
  margin: 0 auto;
  display: flex;

  position: relative;
  background-color: var(--Gray1_50, #fafafa);
`;

export const CategoryBarContainer = styled.div<{ isShow: boolean }>`
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
  margin-top: -3px;

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

      @media (max-width: 450px) {
        /* line-height: 24px; */
        width: fit-content;
      }

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

  @media (max-width: 565px) {
    padding-top: 20px;

    align-items: flex-start;

    box-sizing: border-box;
    height: fit-content;
    display: ${(props) => (props.isShow ? "flex" : "none")};
    flex-direction: ${(props) => (props.isShow ? "column" : "")};
  }
`;

export const SideBarContainer = styled.div`
  display: none;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 565px) {
    display: flex;
    justify-content: flex-end;
  }
  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .close-btn {
    position: absolute;
    top: 10px;
  }
`;
