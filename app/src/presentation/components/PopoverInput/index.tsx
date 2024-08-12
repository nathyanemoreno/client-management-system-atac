import { FC } from 'react';
import Styled from './styled';

export const PopoverInput: FC<{
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}> = ({ value, onChange, placeholder }) => {
    return (
        <Styled.Input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};
