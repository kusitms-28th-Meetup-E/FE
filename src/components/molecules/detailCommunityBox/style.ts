import styled from "styled-components";

export const CommunityPostContainer = styled.div`
  width: 896px;
  height: 517px;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);

  .top-post-wrapper {
    border-bottom: 2px solid var(--Gray2_100, #f5f5f5);
    margin: 0px 30px;
    padding: 21px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  .top-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 30px;
    box-sizing: border-box;

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
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-wrap: break-word;
      height: 160px;
    }
  }

  .content-quot {
    margin: 30px 30px;
    height: 130px;
    border-radius: 5px;
    background: var(--Gray2_100, #f5f5f5);
    border-radius: 5px;
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

  @media (max-width: 896px) {
    width: 100%;
  }
`;
