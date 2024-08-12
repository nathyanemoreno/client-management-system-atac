import { CSSProperties, ReactNode } from "react";

export type TextVariant =
  | "text-sm"
  | "text-md"
  | "text-lg"
  | "heading-sm"
  | "heading-md"
  | "heading-lg";

export interface TextProps {
  variant?: TextVariant;
  style?: CSSProperties;
  as?: string;
  children?: ReactNode;
}
