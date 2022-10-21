import { FC } from "react";
import Image from "next/future/image";
import { FeaturesCardProps } from "./features-card.types";

const FeaturesCard: FC<FeaturesCardProps> = ({ src, alt, title, subtitle }) => {
  return (
    <div className="features-slider-item">
      <div className="features-slider-item__img">
        <Image src={src} alt={alt} width={946} height={532} />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default FeaturesCard;
