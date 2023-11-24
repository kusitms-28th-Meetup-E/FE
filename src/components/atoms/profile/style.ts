import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 30px;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .user-nickname {
      color: var(--Gray7_600, #757575);
      font-size: var(--text_cap1);
      line-height: 18px; /* 150% */
      letter-spacing: -0.18px;
    }

    .content-date {
      color: var(--Gray5_400, #bdbdbd);
      font-size: var(--text_btn1);
      font-weight: 400;
      line-height: 10px; /* 100% */
      letter-spacing: -0.15px;
    }
  }
`;

export const BigUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 30px;
    width: 40px;
    height: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .user-nickname {
      color: var(--Gray7_600, #757575);
      font-size: var(--text_b2);
      line-height: 18px; /* 150% */
      letter-spacing: -0.18px;
    }

    .content-date {
      color: var(--Gray5_400, #bdbdbd);
      font-size: var(--text_b3);
      font-weight: 400;
      line-height: 10px; /* 100% */
      letter-spacing: -0.15px;
    }
  }
`;

export const LongUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: var(--text_cap1);
  text-align: center;
  img {
    border-radius: 24px;
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  .user-nickname {
    color: var(--Gray9_800, #424242);
  }

  .content-date {
    color: var(--Gray5_400, #bdbdbd);
    padding-top: 1px;
  }
`;
