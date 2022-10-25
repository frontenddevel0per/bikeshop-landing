import { ComponentPropsWithRef, FC } from "react";
import { StyledRadioButton } from "./radio-button.styled";
import { RadioButtonProps } from "./rabio-button.types";

const RadioButton: FC<RadioButtonProps & ComponentPropsWithRef<"div">> = ({
  isActive,
  color,
  ...props
}) => {
  return (
    <StyledRadioButton isActive={isActive} color={color} {...props}>
      <div className="radiobutton-circle"></div>
    </StyledRadioButton>
  );
};

export default RadioButton;
