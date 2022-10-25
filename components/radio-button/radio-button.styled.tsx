import styled from "styled-components";

export const StyledRadioButton = styled.div<{
  isActive?: boolean;
  color: "sand" | "khaki" | "black";
}>`
  width: fit-content;
  padding: ${(props) => (props.isActive ? `4px` : `0`)};
  border: ${(props) => (props.isActive ? `1px solid #FFF` : `none`)};
  border-radius: 100%;
  cursor: ${(props) => (props.isActive ? `auto` : `pointer`)};

  .radiobutton-circle {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: ${(props) =>
      props.color === "black"
        ? `#171717`
        : props.color === "sand"
        ? `#9E998D`
        : `#5A605C`};
  }
`;
