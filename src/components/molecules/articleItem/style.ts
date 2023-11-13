import styled from "styled-components";

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  box-shadow: 0px 15px 35px 0px rgba(66, 66, 66, 0.05);

  .slide-container {
    flex-direction: column;
    width: 252px;
    height: 288px;
    border-radius: 5px;
    background: #fff;

    .slide-image {
      height: 50%;
    }

    .slide-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0px 0px;
    }

    .slide-text {
      display: flex;
      justify-content: space-evenly;
      gap: 8px;
      flex-direction: column;
      height: 50%;
      padding: 18px;
      box-sizing: border-box;
      line-height: 14px;
      letter-spacing: -0.21px;

      .text-type {
        color: var(--Main_Blue);
        font-weight: 600;
        font-size: var(--text_b3);
      }

      .text-title {
        color: var(--Gray10_900);
        font-size: var(--text_b2);
        line-height: 24px;
        letter-spacing: -0.24px;
      }

      .last-text {
        align-items: center;
        display: flex;
        justify-content: space-between;

        .button-wrapper {
          display: flex;
          gap: 6px;
        }

        .text-date {
          color: var(--Gray6_500, #959595);
          font-size: var(--text_b3);
        }
      }
    }
  }
`;