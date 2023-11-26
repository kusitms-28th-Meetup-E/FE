import styled from "styled-components";

export const Container = styled.div`
  width: 273px;
  height: 119px;
  border-radius: 5px;
  background: var(--Gray3_200, #eee);
  padding: 10px 15px 15px;
  box-sizing: border-box;
  cursor: pointer;
  .text {
    width: 231px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin-top: 6px;
    color: var(--Gray8_700, #616161);
    font-size: var(--text_b3);
    font-weight: 400;
    line-height: 22px;
  }
`;
