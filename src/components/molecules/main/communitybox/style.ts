import styled from "styled-components";

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 296px;
  flex-shrink: 0;
  box-shadow: 0px 15px 12px 0px rgba(117, 117, 117, 0.2);
  background: var(--Gray2_100, #f5f5f5);
  overflow: hidden;
  flex: 1;
  border-radius: 5px;
  cursor: pointer;

  .community-content {
    padding: 20px;
    box-sizing: border-box;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .community-tag-wrapper {
      display: flex;
      gap: 6px;
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 18px;

      .content-text {
        overflow: hidden;
        display: -webkit-box;
        color: var(--Gray9_800, #424242);
        font-size: var(--text_b3);
        font-weight: 400;
        line-height: 22px; /* 157.143% */
        letter-spacing: -0.21px;
        letter-spacing: -0.24px;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-wrap: break-word;
      }

      .status-info {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        height: 30px;

        .content-review {
          display: flex;
          align-items: center;
          gap: 8px;

          //
          color: var(--Gray6_500, #959595);
          text-align: center;
          font-size: 12px;
          line-height: 18px; /* 150% */
          letter-spacing: -0.18px;

          div {
            display: flex;
            align-items: center;
            gap: 3px;
          }
        }
      }
    }
  }

  .quotation {
    padding: 12px 18px;
    box-sizing: border-box;
    display: flex;
    gap: 4px;
    height: 40%;
    flex-direction: column;
    border-radius: 0px 0px 5px 5px;
    background: var(--Gray3_200, #eee);
    overflow: hidden;

    .quot-title {
      color: var(--Gray6_500, #959595);
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px; /* 140% */
      letter-spacing: -0.15px;
    }

    .quot-text {
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--Gray8_700, #616161);
      font-size: 14px;
      line-height: 22px; /* 157.143% */
      letter-spacing: -0.21px;
    }
  }
`;
