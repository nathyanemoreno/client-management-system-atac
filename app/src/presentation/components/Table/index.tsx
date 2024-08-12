import { FC, ReactNode } from 'react';
import Styled from './styled';

interface Props {
    children: ReactNode;
}

const Table: FC<Props> = ({ children }) => {
    return <Styled.Table>{children}</Styled.Table>;
};

const TableHeader: FC<Props> = ({ children }) => {
    return <Styled.TableHeader>{children}</Styled.TableHeader>;
};

const TableBody: FC<Props> = ({ children }) => {
    return <Styled.TableBody>{children}</Styled.TableBody>;
};

const TableRow: FC<Props> = ({ children }) => {
    return <Styled.TableRow>{children}</Styled.TableRow>;
};

const TableCell: FC<Props> = ({ children }) => {
    return <Styled.TableCell>{children}</Styled.TableCell>;
};

const TableHeaderCell: FC<Props> = ({ children }) => {
    return <Styled.TableHeaderCell>{children}</Styled.TableHeaderCell>;
};

export { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell };
