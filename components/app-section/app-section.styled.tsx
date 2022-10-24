import styled from "styled-components";

export const Switch = styled.div<{ active?: boolean }>`
  width: 60px;
  height: 2px;

  background: #171717;
  opacity: ${(props) => (props.active ? `1` : `0.2`)};
  border-radius: 100px;
  cursor: ${(props) => (props.active ? `auto` : `pointer`)};
  transition: 0.25s all ease;
`;
