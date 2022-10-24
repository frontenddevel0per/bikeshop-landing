import { FC, useEffect, useState } from "react";
import TechSpecsItem from "../specs-item/specs-item.component";

import DB from "../../resources/DB/specifications.json";

const TechSpecs: FC = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <section className="techspecs" id="tech-specs">
      <h2 className="section-title">Tech specs</h2>
      <div className="techspecs-group">
        <TechSpecsItem
          title="Key specifications"
          arr={DB.keyspecs}
          isActive={isActive1}
          setIsActive={setIsActive1}
        />
        <TechSpecsItem
          title="Bike"
          arr={DB.keyspecs}
          isActive={isActive2}
          setIsActive={setIsActive2}
        />
        <TechSpecsItem
          title="Electronics"
          arr={DB.keyspecs}
          isActive={isActive3}
          setIsActive={setIsActive3}
        />
      </div>
    </section>
  );
};

export default TechSpecs;
