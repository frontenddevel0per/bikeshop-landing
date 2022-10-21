import { FC } from "react";
import FeaturesCard from "../features-card/features-card.component";

import sliderimg1 from "../../resources/img/sliderimg1.png";
import sliderimg2 from "../../resources/img/sliderimg2.png";
import sliderimg3 from "../../resources/img/sliderimg3.png";

const Features: FC = () => {
  return (
    <section className="features" id="features">
      <h2>Key features</h2>
      <div className="features-slider">
        <FeaturesCard
          src={sliderimg1}
          alt="slider-img-1"
          title="Removable battery"
          subtitle="The battery goes the distance with you and clicks right back into place."
        />
        <FeaturesCard
          src={sliderimg2}
          alt="slider-img-2"
          title="Assistance"
          subtitle="A swift first kick powers the speed you need for an active ride and an easy climb."
        />
        <FeaturesCard
          src={sliderimg3}
          alt="slider-img-3"
          title="Wireless charging"
          subtitle="Once docked in the cockpit, your phone is in a state of charge."
        />
        <FeaturesCard
          src={sliderimg2}
          alt="slider-img-4"
          title="Integrated lights"
          subtitle="Lights integrated into the frame give you always on visibility day and night."
        />
      </div>
    </section>
  );
};

export default Features;
