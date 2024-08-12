export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps<T = SelectOption> {
  value?: T;
  options: T[];
  label?: string
  formatOption(item: T): SelectOption;
  onChangeOption(item: T): void;
}
