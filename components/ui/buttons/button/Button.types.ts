import { ReactNode } from "react";

export interface IButton {
  variant: "blur" | "solid" | "alpha";
  size: "m" | "s";
  color: "gray" | "orange";
  text?: string;
  icon?: string | ReactNode;
}
