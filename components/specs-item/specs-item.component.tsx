import { FC, useState } from "react";
import Image from "next/future/image";
import { SpecItemDiv } from "./specs-item.styled";
import type { TRProps, TechSpecItemProps } from "./specs-item.types";

import arrowicon from "../../resources/img/arrow-icon.png";

const TechSpecsItem: FC<TechSpecItemProps> = ({
  title,
  arr,
  isActive,
  setIsActive,
}) => {
  return (
    <SpecItemDiv isActive={isActive}>
      <div className="specitem-header" onClick={() => setIsActive(!isActive)}>
        <div className="specitem-header-title">
          <p className="specitem-header-title-name">{title}</p>
          <p className="specitem-header-title-count">{arr.length}</p>
        </div>
        <Image src={arrowicon} alt="arrowicon" width={24} height={24} />
      </div>
      <div className="specitem-main">
        <div className="specitem-main-list">
          {arr.map((item: TRProps, index: number) => {
            return (
              <div className="specitem-main-list-row" key={index}>
                <div className="specitem-main-list-cell">
                  <p>{item.name}</p>
                </div>
                <div className="specitem-main-list-cell">
                  <p>{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SpecItemDiv>
  );
};

export default TechSpecsItem;
