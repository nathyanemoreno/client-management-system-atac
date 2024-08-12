import { CSSProperties, ReactNode } from "react";

export interface StackProps {
  spacing?: number;
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?: "center" | "space-between";
  children?: ReactNode;
  style?: CSSProperties;
}
