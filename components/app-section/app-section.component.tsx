import Image from "next/future/image";
import { FC, useState } from "react";

import sliderimg1 from "../../resources/img/sliderimg1.png";
import sliderimg2 from "../../resources/img/sliderimg2.png";
import sliderimg3 from "../../resources/img/sliderimg3.png";
import {
  AppStoreIcon,
  PlayStoreIcon,
} from "../stores-icon/stores-icon.component";
import { Switch } from "./app-section.styled";

const AppSection: FC = () => {
  const [activeSwitch, setActiveSwitch] = useState(1);

  return (
    <section className="app" id="app-section">
      <h2 className="section-title">Ride Awake</h2>
      <div className="app-info">
        <p>
          With your phone docked in sight, your bike becomes an all-knowing
          companion. Connected to your every move and on the lookout for what’s
          ahead, now’s your chance to wander and wander.
        </p>
        <p>
          With a constant ally tuned into the road, it will keep you moving well
          informed. Your next ride is no longer a question of if or when.
          Rather, where to?
        </p>
      </div>
      <div className="app-slider">
        <div className="app-slider__image">
          <Image src={sliderimg1} alt="sliderimg1" width={1920} height={1320} />
        </div>
        <div className="app-slider-description">
          <div className="app-slider-description-text">
            <h4>Ride stats</h4>
            <p>
              With a constant ally tuned into the road, it will keep you moving
              well informed.{" "}
            </p>
          </div>
          <div className="app-slider-description-icons">
            <AppStoreIcon />
            <PlayStoreIcon />
          </div>
        </div>
        <div className="app-slider-switches">
          <Switch
            active={activeSwitch === 1}
            onClick={() => setActiveSwitch(1)}
          />
          <Switch
            active={activeSwitch === 2}
            onClick={() => setActiveSwitch(2)}
          />
          <Switch
            active={activeSwitch === 3}
            onClick={() => setActiveSwitch(3)}
          />
        </div>
      </div>
    </section>
  );
};

export default AppSection;
