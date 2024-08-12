import { ChangeEvent, FC, useCallback } from "react";
import { Label } from "../Label";
import { FloatingInputField, FloatingInputWrapper } from "./styled";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({
  onChangeText,
  label,
  placeholder,
  value,
  type
}) => {
  const handleOnTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeText(event.target.value);
    },
    [onChangeText]
  );

  return (
    <FloatingInputWrapper>
      {label && <Label>{label}</Label>}
      <FloatingInputField
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleOnTextChange}
        required
      />
    </FloatingInputWrapper>
  );
};
