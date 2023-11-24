import styled from "styled-components";
export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.3rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 9;

  background: rgba(21, 21, 21, 0.7);
  .box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-evenly;
    padding: 30px;
    width: 300px;
    border-radius: 30px;
    height: 100px;
    align-items: center;
    background-color: white;
  }
`;
