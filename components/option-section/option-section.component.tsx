import { FC, useState } from "react";
import RadioButton from "../radio-button/radio-button.component";
import OrderButton from "../order-button/order-button.component";

import cowboy4black from "../../resources/img/cowboy-4-black.png";
import cowboy4sand from "../../resources/img/cowboy-4-sand.png";
import cowboy4khaki from "../../resources/img/cowboy-4-khaki.png";
import Image from "next/future/image";

const OptionSection: FC = () => {
  const [color, setColor] = useState("sand");
  return (
    <section className="option">
      <div className="option-wrapper">
        <div className="option-wrapper-header">
          <div className="option-wrapper-header-text">
            <p className="option-wrapper-header-text-minititle">Cowboy 4</p>
            <p className="option-wrapper-header-text-title">
              Mount up, ride on
            </p>
          </div>
          <div className="option-wrapper-header-buttons">
            <div className="option-wrapper-header-buttons-colors">
              <RadioButton
                color="khaki"
                isActive={color === "khaki"}
                onClick={() => setColor("khaki")}
              />
              <RadioButton
                color="sand"
                isActive={color === "sand"}
                onClick={() => setColor("sand")}
              />
              <RadioButton
                color="black"
                isActive={color === "black"}
                onClick={() => setColor("black")}
              />
            </div>
            <OrderButton size="medium" theme="light" />
          </div>
        </div>
        <Image
          src={
            color === "black"
              ? cowboy4black
              : color === "sand"
              ? cowboy4sand
              : cowboy4khaki
          }
          alt={
            color === "black"
              ? "cowboy4black"
              : color === "sand"
              ? "cowboy4sand"
              : "cowboy4khaki"
          }
          width={1170}
          height={648}
        />
      </div>
    </section>
  );
};

export default OptionSection;
