import { FC } from "react";
import { StyledButton } from "./order-button.styled";
import { OrderButtonType } from "./order-button.types";

const OrderButton: FC<OrderButtonType> = ({ size, theme, ...props }) => {
  return (
    <StyledButton size={size} theme={theme} {...props}>
      Order now
    </StyledButton>
  );
};

export default OrderButton;
