import { ComponentPropsWithRef } from "react";

type OrderButtonProps = {
  size: "small" | "medium";
  theme: "light" | "dark";
};

export type OrderButtonType = ComponentPropsWithRef<"button"> &
  OrderButtonProps;
