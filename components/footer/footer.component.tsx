import { FC, useState } from "react";
import Image from "next/future/image";
import { StyledArrowIcon } from "./footer.styled";

import englishicon from "../../resources/img/english-icon.png";
import arrowicon from "../../resources/img/arrow-icon-black.png";

const Footer: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="footer">
      <div className="footer-language" onClick={() => setIsOpened(!isOpened)}>
        <Image src={englishicon} alt="english-icon" width={20} height={20} />
        <p>English</p>
        <StyledArrowIcon isOpened={isOpened}>
          <Image src={arrowicon} alt="arrow-icon" width={20} height={20} />
        </StyledArrowIcon>
      </div>
      <div className="footer-links">
        <a href="#">
          <p>Terms of use</p>
        </a>
        <a href="#">
          <p>Data protection</p>
        </a>
        <p>© 2021 Cowboy</p>
      </div>
    </section>
  );
};

export default Footer;
