import styled from "styled-components";

export const StyledDiv = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      258.17deg,
      rgba(255, 255, 255, 0.086) -4.72%,
      rgba(255, 255, 255, 0) 113.59%
    ),
    rgba(23, 23, 23, 0.2);
  backdrop-filter: blur(6px);

  border-radius: 8px;

  img {
    border-radius: 8px;
  }
`;
