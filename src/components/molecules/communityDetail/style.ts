import styled from "styled-components";

export const CommunityDetailContainer = styled.div`
  width: 100%;
  height: 264px;
  border-radius: 5px;
  background: var(--White, #fff);
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);

  .top-content {
    padding: 18px;
    /* height: 70%; */
    height: 191px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;

    .profile-text-wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .top-content-text {
        display: -webkit-box;
        color: var(--Gray10_900, #212121);
        font-size: var(--text_b3);
        line-height: 22px;
        letter-spacing: -0.21px;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-wrap: break-word;
      }
    }

    .top-second-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }

  .bottom-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    /* height: 30%; */
    height: 73px;
    padding: 18px;
    box-sizing: border-box;
    border-radius: 0px 0px 5px 5px;
    background: var(--Gray2_100, #f5f5f5);

    div {
      color: var(--Gray6_500, #959595);
      font-size: var(--text_btn1);
      line-height: 14px;
      letter-spacing: -0.15px;
    }

    p {
      color: var(--Gray9_800, #424242);
      font-size: var(--text_b3);
      line-height: 22px;
      letter-spacing: -0.21px;
      overflow: hidden;
    }
  }
`;
