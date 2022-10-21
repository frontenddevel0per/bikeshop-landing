import { FC } from "react";
import Image from "next/image";

import logo from "../../resources/img/logo.png";
import OrderButton from "../order-button/order-button.component";

const Header: FC = () => {
  return (
    <div className="header">
      <nav>
        <Image src={logo} alt="logo" width={132} height={19} />
        <ul>
          <li>Overview</li>
          <li>Key features</li>
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
