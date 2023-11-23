import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 5px;
  background: var(--Gray3_200, #eee);
  /* width: fit-content; */
  height: 20px;
  padding: 22px 20px;
  line-height: 27px;
  align-items: center;
  .title {
    display: flex;
    align-items: center;
    color: var(--Gray6_500, #959595);
    width: 80px;
  }
  .title::after {
    content: "";
    display: block;
    width: 1px;
    height: 15px;
    background: var(--Gray4_300, #d9d9d9);
    margin-left: 10px;
    margin-right: 10px;
  }

  .text {
    color: var(--Gray9_800, #424242);
    width: 900px;
  }

  @media (max-width: 650px) {
    height: 100%;
  }
`;
