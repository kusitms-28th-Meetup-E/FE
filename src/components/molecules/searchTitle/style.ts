import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--Gray3_200, #eee);
  .inner {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    color: var(--Gray9_800, #424242);
    font-size: var(--text_h5);
    font-weight: 600;
    line-height: 34px;
    letter-spacing: -0.36px;
    padding: 28px 0 17px;
    border-bottom: 1px solid var(--Gray4_300, #d9d9d9);
  }
  .inner p {
    color: var(--Main_Blue, #0084ff);
  }
  .inner p:nth-child(1) {
    margin-right: 5px;
  }
  .inner p:nth-child(2) {
    margin-left: 7px;
  }
`;
