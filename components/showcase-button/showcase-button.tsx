import Image from "next/future/image";
import { ComponentPropsWithRef, FC } from "react";
import { StyledButton } from "./showcase-button.styled";

import playicon from "../../resources/img/play-icon.png";

const ShowcaseButton: FC<ComponentPropsWithRef<"button">> = ({ ...props }) => {
  return (
    <StyledButton {...props}>
      <Image src={playicon} alt="play-icon" width={44} height={44} />
      See it in action
    </StyledButton>
  );
};

export default ShowcaseButton;
