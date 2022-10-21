import { FC } from "react";
import Image from "next/future/image";
import ShowcaseButton from "../showcase-button/showcase-button";

import bike from "../../resources/img/cowboy-4-black 1.png";

const Showcase: FC = () => {
  return (
    <div className="showcase">
      <div className="showcase-title">
        <h4>Cowboy 4</h4>
        <h1>Dream Machine</h1>
        <ShowcaseButton style={{ margin: "52px auto 0", zIndex: "5" }} />
      </div>
      <Image
        src={bike}
        alt="cowbow-4-black"
        width={1188}
        height={655}
        className="showcase-bike"
      />
    </div>
  );
};

export default Showcase;
