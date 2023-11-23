import styled from "styled-components";

export const Container = styled.div`
  width: 690px;
  //height: 154px;
  border-radius: 5px;
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);
  background-color: var(--Gray1_50, #fafafa);
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  img {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .textBox {
    padding: 16px 0 20px 16px;
  }
  .textBox .topic {
    color: var(--Gray10_900, #212121);
    font-size: var(--text_h6);
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.3px;
    margin: 10px 0;
  }
  .textBox .oneLine {
    color: var(--Gray6_500, #959595);
    font-size: var(--text_b3);
    font-weight: 600;
    line-height: 22px; /* 157.143% */
    letter-spacing: -0.21px;
    width: 400px;
    word-wrap: break-word;
  }
`;
