import styled from "styled-components";

export const StyledButton = styled.button<{
  size: "small" | "medium";
  theme: "light" | "dark";
}>`
  width: ${(props) => (props.size === "medium" ? `140px` : `114px`)};
  height: ${(props) => (props.size === "medium" ? `48px` : `36px`)};
  padding: ${(props) => (props.size === "medium" ? `12px 28px` : `8px 20px`)};
  background: ${(props) => (props.theme === "dark" ? `#171717` : `#FFF`)};
  color: ${(props) => (props.theme === "dark" ? `#FFF` : `#171717`)};
  border-radius: 100px;
  border: none;
  outline: none;

  font-size: ${(props) => (props.size === "medium" ? `16px` : `14px`)};
  line-height: ${(props) => (props.size === "medium" ? `24px` : `20px`)};
  font-weight: 500;
  text-align: center;
`;
