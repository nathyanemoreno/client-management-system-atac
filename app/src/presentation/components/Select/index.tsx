// SelectComponent.js
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { useClickOutside } from "~/domain/hooks/useClickOutside";
import { SelectProps } from "./types";
import { Label } from "../Label";

export interface StyledState {
  $isOpen: boolean;
}

const SelectWrapper = styled.div`
  user-select: none;
  position: relative;
`;

const SelectField = styled.div`
  padding: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.surface[100]};
`;

const OptionsList = styled.ul<StyledState>`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #bdbdbd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: ${({ theme }) => theme.colors.surface[100]};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;

const Option = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[100]}};
  }
`;

export const Select = <TOption,>({
  options,
  value,
  label,
  formatOption,
  onChangeOption,
}: SelectProps<TOption>) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = useMemo(() => {
    return value && formatOption(value);
  }, [value, formatOption]);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleSelect = useCallback(
    (option: TOption) => {
      onChangeOption(option);
      setIsOpen(false);
    },
    [onChangeOption]
  );

  const renderOption = useCallback(
    (option: TOption) => {
      const formattedOption = formatOption(option);

      return (
        <Option
          key={formattedOption.value}
          aria-selected={formattedOption.value === selectedOption?.value}
          onClick={() => handleSelect(option)}
        >
          {formattedOption.label}
        </Option>
      );
    },
    [formatOption, handleSelect, selectedOption]
  );

  const selectRef = useClickOutside(toggleDropdown, isOpen);

  return (
    <SelectWrapper ref={selectRef}>
      {label && <Label>{label}</Label>}
      <SelectField onClick={toggleDropdown}>
        {selectedOption?.label ?? label}
      </SelectField>

      <OptionsList $isOpen={isOpen}>{options.map(renderOption)}</OptionsList>
    </SelectWrapper>
  );
};
