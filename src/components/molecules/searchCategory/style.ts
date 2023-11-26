import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 67px;
  background-color: var(--Gray2_100, #f5f5f5);
  position: relative;
  .inner {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    color: var(--Gray6_500, #959595);
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;
    letter-spacing: -0.36px;
    gap: 30px;
  }
  .inner div {
    cursor: pointer;
    padding-bottom: 10px;
    padding-top: 21px;
  }
  .inner .active {
    border-bottom: 2px solid var(--Gray10_900, #212121);
    color: var(--Gray10_900, #212121);
  }
`;
