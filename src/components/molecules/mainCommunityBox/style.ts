import styled from "styled-components";

export const CommunityMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
  /* width: 47.91%; */
  max-width: 690px;
  /* width: 100%; */
  height: 345px;
  border-radius: 5px;
  background: var(--White, #fff);
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);
  padding: 20px 24px;
  box-sizing: border-box;
  cursor: pointer;

  .top-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .content-category {
      display: flex;
      gap: 6px;
    }

    .content-text {
      display: -webkit-box;
      text-overflow: 4;
      color: var(--Gray10_900, #212121);
      font-size: var(--text_b2);
      line-height: 24px;
      letter-spacing: -0.24px;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-wrap: break-word;
      height: 96px;
    }
  }

  .content-quot {
    margin-top: 30px;
    height: 95px;
    border-radius: 5px;
    background: var(--Gray2_100, #f5f5f5);
    border-radius: 5px;
    cursor: pointer;
    display: flex;

    .quot-text {
      width: 70%;
      padding: 14px 16px;
      box-sizing: border-box;

      p {
        color: var(--Gray6_500, #959595);
        font-size: var(--text_btn1);
        line-height: 14px;
        letter-spacing: -0.15px;
      }

      div {
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

  .content-button {
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
    gap: 8px;
  }

  @media (max-width: 690px) {
    width: 100%;
  }
`;
