export const AWD = 1;

export type TRProps = {
  name: string;
  value: string;
};

export type TechSpecItemProps = {
  title: string;
  arr: TRProps[];
  isActive: boolean;
  setIsActive: (data: boolean) => void;
};
