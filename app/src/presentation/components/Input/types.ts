export interface InputProps {
  value?: string;
  placeholder?: string;
  label?: string;
  onChangeText(value: string): void;
  type?: string;
}
