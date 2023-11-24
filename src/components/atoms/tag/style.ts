import styled from "styled-components";

export const Tag = styled.div<{ $category: string | undefined }>`
  display: inline-flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 55px;
  background: ${(props) =>
    props.$category === "일자리-노동"
      ? "var(--Main_Blue)"
      : props.$category === "주거-사회안전망"
      ? "var(--Sub_Purple)"
      : props.$category === "환경"
      ? "var(--Main_NeonGreen)"
      : props.$category === "교육"
      ? "var(--Sub_Orange)"
      : "white"};

  //text
  color: var(--Gray1_50, #fafafa);
  text-align: center;
  font-size: var(--text_cap1);
  font-weight: 600;
  line-height: 18px; /* 150% */
  letter-spacing: -0.18px;
`;

export const Keyword = styled.div<{ $category: string | undefined }>`
  display: inline-flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 55px;
  color: ${(props) =>
    props.$category === "일자리-노동"
      ? "var(--Main_Blue)"
      : props.$category === "주거-사회안전망"
      ? "var(--Sub_Purple)"
      : props.$category === "환경"
      ? "var(--Main_NeonGreen)"
      : "var(--Sub_Orange)"};
  background: var(--Gray1_50, #fafafa);

  //text
  text-align: center;
  font-size: var(--text_cap1);
  font-weight: 600;
  line-height: 18px; /* 150% */
  letter-spacing: -0.18px;
`;
