import styled from "styled-components";

export const StyledArrowIcon = styled.div<{ isOpened?: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    transition: 0.25s all ease;
    transform: rotate(${(props) => (props.isOpened ? `180deg` : `0deg`)});
  }
`;
