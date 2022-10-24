import { FC } from "react";
import Image from "next/image";
import { Link as Scroll, animateScroll } from "react-scroll";
import { scrollDurationCalc } from "./header.helpers";
import { DELAY, OFFSET } from "./header.constants";

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
            <Scroll
              to="overview"
              smooth
              duration={(scrollDistanceInPx) =>
                scrollDurationCalc(scrollDistanceInPx)
              }
              delay={DELAY}
            >
              Overview
            </Scroll>
          </li>
          <li>
            <Scroll
              to="features"
              smooth
              duration={(scrollDistanceInPx) =>
                scrollDurationCalc(scrollDistanceInPx)
              }
              delay={DELAY}
              offset={OFFSET}
            >
              Key features
            </Scroll>
          </li>
          <li>
            <Scroll
              to="app-section"
              smooth
              duration={(scrollDistanceInPx) =>
                scrollDurationCalc(scrollDistanceInPx)
              }
              delay={DELAY}
              offset={OFFSET}
            >
              Ride awake
            </Scroll>
          </li>
          <li>
            <Scroll
              to="reviews"
              smooth
              duration={(scrollDistanceInPx) =>
                scrollDurationCalc(scrollDistanceInPx)
              }
              delay={DELAY}
              offset={OFFSET}
            >
              Reviews
            </Scroll>
          </li>
          <li>
            <Scroll
              to="tech-specs"
              smooth
              duration={(scrollDistanceInPx) =>
                scrollDurationCalc(scrollDistanceInPx)
              }
              delay={DELAY}
              offset={OFFSET}
            >
              Tech specs
            </Scroll>
          </li>
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
