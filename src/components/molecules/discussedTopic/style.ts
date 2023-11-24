import styled from "styled-components";
export const Container = styled.div`
  width: 252px;
  height: 332px;
  /* margin-left: 50px; */
  position: relative;
  .topicBackground {
    width: 100%;
    height: 49%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
export const Main = styled.div<{ $hover: boolean }>`
  width: 100%;
  height: 100%;
  filter: ${(props) => (props.$hover ? "blur(2px)" : undefined)};
  -webkit-filter: ${(props) => (props.$hover ? "blur(2px)" : undefined)};
`;
export const Title = styled.div<{ $hover: boolean; $idx: number }>`
  position: relative;
  width: 100%;
  height: 50%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: ${(props) =>
    props.$idx === 0
      ? "var(--Main_Blue)"
      : props.$idx === 1
      ? "var(--Sub_Purple)"
      : props.$idx === 2
      ? "var(--Main_NeonGreen)"
      : "var(--Sub_Orange)"};
  .text {
    display: ${(props) => (props.$hover ? "none" : "block")};
    padding: 18px 0 0 20px;
    width: 83px;
    white-space: pre;

    color: var(--Gray1_50, #fafafa);
    font-weight: 700;
    font-size: var(--text_h5);
    line-height: 34px;
  }
  .donut {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .plus {
    z-index: 2;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;

export const Hover = styled.div<{ $hover: boolean }>`
  opacity: ${(props) => (props.$hover ? "1" : "0")};
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(36, 36, 36, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 0.5s;
  .text {
    opacity: 1;
    padding: 18px 0 0 20px;
    width: 83px;
    white-space: pre;

    color: var(--Gray1_50, #fafafa);
    font-weight: 700;
    font-size: var(--text_h5);
    line-height: 34px;
    z-index: 2;
  }
  .sub_text {
    margin-top: 18px;
    gap: 8px;
    display: flex;
    flex-direction: column;
  }
  .sub_item {
    font-size: var(--text_b3);
    margin: 0 20px;
    width: calc(100% - 40px);
    height: 37px;
    background-color: rgba(250, 250, 250, 0.2);
    border-radius: 5px;
    color: var(--White, #fff);
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    align-items: center;
    cursor: pointer;
  }
`;
