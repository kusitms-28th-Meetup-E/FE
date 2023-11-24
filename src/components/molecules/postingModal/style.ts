import styled from "styled-components";

export const PostingModalContainer = styled.div`
  width: 896px;
  height: 622px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--White, #fff);
  box-shadow: 0px 15px 55px 0px rgba(66, 66, 66, 0.35);
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .first-box {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;

    button {
      height: 56px;
      border-radius: 5px;
      padding: 19px 31px;
      background: var(--Gray3_200);
      border: none;
      color: var(--Gray6_500, #959595);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: var(--text_b1);
      font-weight: 600;
      cursor: pointer;
    }
  }

  .first-box button.abled {
    background: var(--Main_Blue);
    color: var(--White);
  }

  .second-box {
    padding: 10px 30px;
    display: flex;
    gap: 6px;
  }

  .input-box {
    width: 836px;
    height: 270px;
    margin: 0px 30px;
    margin-top: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid var(--Gray3_200, #eee);
    background: var(--Gray2_100, #f5f5f5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    textarea {
      height: 220px;
      padding: 20px;
      box-sizing: border-box;
      outline: none;
      border: none;
      background: var(--Gray2_100, #f5f5f5);
      color: var(--Gray10_900, #212121);
      font-size: var(--text_b2);
      line-height: 27px;
      letter-spacing: -0.24px;
      resize: none;

      &::placeholder {
        color: var(--Gray6_500, #959595);
      }
    }

    p {
      padding: 12px 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-end;
      color: var(--Gray7_600, #757575);
      font-size: 12px;
    }
  }

  .content-quot {
    margin: 30px;
    height: 130px;
    border-radius: 5px;
    background: var(--Gray2_100, #f5f5f5);
    border-radius: 5px;
    display: flex;

    .quot-text {
      width: 70%;
      padding: 14px 16px;
      box-sizing: border-box;
      cursor: pointer;

      p {
        color: var(--Gray6_500, #959595);
        font-size: var(--text_btn1);
        line-height: 14px;
        letter-spacing: -0.15px;
      }

      div {
        margin-top: 8px;
        color: var(--Gray9_800, #424242);
        font-size: var(--text_b3);
        line-height: 22px;
        letter-spacing: -0.21px;
        overflow: hidden;
      }
    }

    img {
      width: 30%;
      object-fit: cover;
      border-radius: 0px 5px 5px 0px;
    }
  }
`;
