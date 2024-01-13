import { ReactNode } from "react";

export interface IButton {
  variant:
    | "gray-blur"
    | "gray-solid"
    | "gray-alpha"
    | "orange-blur"
    | "orange-solid"
    | "orange-alpha";
  size: "m" | "s";
  text?: string;
  icon?: string | ReactNode;
}
