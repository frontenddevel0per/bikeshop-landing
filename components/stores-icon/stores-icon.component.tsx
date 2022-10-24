import { FC } from "react";
import Image from "next/future/image";
import { StyledDiv } from "./stores-icon.styled";

import appstoreimg from "../../resources/img/appstore.png";
import playstoreimg from "../../resources/img/playstore.png";

export const AppStoreIcon: FC = () => {
  return (
    <StyledDiv width={120} height={40}>
      <Image src={appstoreimg} alt="appstoreimg" width={100} height={25} />
    </StyledDiv>
  );
};

export const PlayStoreIcon: FC = () => {
  return (
    <StyledDiv width={135} height={40}>
      <Image src={playstoreimg} alt="playstoreimg" width={135} height={40} />
    </StyledDiv>
  );
};
