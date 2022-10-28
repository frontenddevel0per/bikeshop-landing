import { FC } from "react";
import FeaturesCard from "../features-card/features-card.component";

import galleryimg1 from "../../resources/img/galleryimg1.png";
import galleryimg2 from "../../resources/img/galleryimg2.png";
import galleryimg3 from "../../resources/img/galleryimg3.png";

const Features: FC = () => {
  return (
    <section className="features" id="features">
      <h2 className="section-title">Key features</h2>
      <div className="features-slider">
        <div className="features-slider-cards">
          <FeaturesCard
            src={galleryimg1}
            alt="slider-img-1"
            title="Removable battery"
            subtitle="The battery goes the distance with you and clicks right back into place."
          />
          <FeaturesCard
            src={galleryimg2}
            alt="slider-img-2"
            title="Assistance"
            subtitle="A swift first kick powers the speed you need for an active ride and an easy climb."
          />
          <FeaturesCard
            src={galleryimg3}
            alt="slider-img-3"
            title="Wireless charging"
            subtitle="Once docked in the cockpit, your phone is in a state of charge."
          />
          <FeaturesCard
            src={galleryimg2}
            alt="slider-img-4"
            title="Integrated lights"
            subtitle="Lights integrated into the frame give you always on visibility day and night."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
