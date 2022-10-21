import { FC } from "react";
import Image from "next/image";
import { Link as Scroll, animateScroll } from "react-scroll";

import logo from "../../resources/img/logo.png";
import OrderButton from "../order-button/order-button.component";

const Header: FC = () => {
  return (
    <div className="header">
      <nav>
        <Image
          src={logo}
          alt="logo"
          width={132}
          height={19}
          onClick={() => animateScroll.scrollToTop()}
        />
        <ul>
          <li>
            <Scroll to="overview" smooth duration={500} delay={150}>
              Overview
            </Scroll>
          </li>
          <li>
            <Scroll
              to="features"
              smooth
              duration={500}
              delay={150}
              offset={-30}
            >
              Key features
            </Scroll>
          </li>
          <li>Ride awake</li>
          <li>Reviews</li>
          <li>Tech specs</li>
        </ul>
      </nav>
      <div className="header-order">
        <div className="header-order-discount">
          <p className="header-order-discount__price">
            From €2,190 <s>€2,190</s>
          </p>
          <p className="header-order-discount__subscription">
            Discounts available
          </p>
        </div>
        <OrderButton size="small" theme="dark" />
      </div>
    </div>
  );
};

export default Header;
