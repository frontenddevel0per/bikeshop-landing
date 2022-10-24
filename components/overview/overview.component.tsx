import Image from "next/future/image";
import { FC } from "react";
import OrderButton from "../order-button/order-button.component";

import pic1 from "../../resources/img/collage-1.png";
import pic2 from "../../resources/img/collage-2.png";
import pic3 from "../../resources/img/collage-3.png";

const Overview: FC = () => {
  return (
    <section className="overview" id="overview">
      <div className="overview-description">
        <h2 className="section-title">Electric bike reimagined</h2>
        <p>
          A simple push of the pedal, and intuition gains new meaning as the
          motor’s torque senses your force and the speed you need. The carbon
          belt spans smoothly, as does the road before you. A newfound freedom
          in a city wilder than you once thought.
        </p>
        <div className="overview-description-order">
          <OrderButton size="medium" theme="dark" />
          <div className="overview-description-order-discount">
            <p className="overview-description-order-discount__price">
              From €2,190 <s>€2,190</s>
            </p>
            <p className="overview-description-order-discount__subscription">
              Discounts available
            </p>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-item pic1">
          <Image src={pic1} alt="collage-1" width={424} height={580} />
        </div>
        <div className="gallery-item pic2">
          <Image src={pic2} alt="collage-2" width={554} height={360} />
        </div>
        <div className="gallery-item pic3">
          <Image src={pic3} alt="collage-3" width={543} height={360} />
        </div>
        <div className="gallery-sign">
          <div className="gallery-sign-icon">
            <div className="gallery-sign-icon__line"></div>
            <i className="gallery-sign-icon__dot"></i>
            <i className="gallery-sign-icon__circle"></i>
          </div>
          <p>Wireless charging</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
