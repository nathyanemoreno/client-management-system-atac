import styled from "styled-components";
import { TextVariant } from "./types";

export interface StyledState {
  $variant: TextVariant;
}

export const TEXT_VARIANTS = {
  "heading-lg": {
    fontSize: "2.5rem",
    lineHeight: "52px",
    fontWeight: "700",
  },
  "heading-md": {
    fontSize: "2rem",
    lineHeight: "36px",
    fontWeight: "700",
  },
  "heading-sm": {
    fontSize: "1.5rem",
    lineHeight: "32px",
    fontWeight: "500",
  },
  "text-lg": {
    fontSize: "1.25rem",
    lineHeight: "28px",
    fontWeight: "500",
  },
  "text-md": {
    fontSize: "1rem",
    lineHeight: "22px",
  },
  "text-sm": {
    fontSize: "0.75rem",
    lineHeight: "16px",
  },
};

const Text = styled.span<StyledState>(({ $variant }) => ({
  ...TEXT_VARIANTS[$variant],
}));

export default { Text };
