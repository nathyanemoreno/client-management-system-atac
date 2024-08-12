import { FC, PropsWithChildren } from 'react';
import Styled from './styled';

import { ReactNode } from 'react';

export interface PopoverProps {
    children: ReactNode;
}

export const Popover: FC<PopoverProps> = ({ children }: PropsWithChildren) => {
    return <Styled.Container>{children}</Styled.Container>;
};
