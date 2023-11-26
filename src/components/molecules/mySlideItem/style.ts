import styled from "styled-components";

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
  cursor: pointer;
  .slide-container {
    flex-direction: column;
    width: 344px;
    height: 303px;
    border-radius: 5px;
    background: #fff;

    .slide-image {
      position: relative;
      height: 50%;

      .topic-tag {
        position: absolute;
        top: 18px;
        left: 18px;
      }
    }

    .slide-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 5px 0px 0px;
    }

    .slide-text {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      flex-direction: column;
      height: 50%;
      padding: 14px 18px;
      box-sizing: border-box;
      line-height: 14px;
      letter-spacing: -0.21px;

      .top-text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow: hidden;

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
      }

      .last-text {
        align-items: flex-end;
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
