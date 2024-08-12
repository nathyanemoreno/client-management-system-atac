import { CSSProperties } from "react";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonVariant = "contained" | "outlined" | "text";

export interface ButtonProps {
  size?: ButtonSize;
  title?: string;
  disabled?: boolean;
  children?: string;
  variant?: ButtonVariant;
  style?: CSSProperties;
  onClick(): void;
}
