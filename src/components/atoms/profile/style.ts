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
    object-fit: cover;
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
