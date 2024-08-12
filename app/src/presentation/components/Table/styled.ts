import styled from "styled-components";

const Table = styled.table(({ theme }) => ({
  width: "100%",
  borderCollapse: "collapse",
  marginTop: theme.spaces[4],
}));

const TableHeader = styled.thead(({ theme }) => ({
  backgroundColor: theme.colors.background,

}));

const TableBody = styled.tbody({});

const TableRow = styled.tr(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.border}`,
}));

const TableCell = styled.td(({ theme }) => ({
  padding: theme.spaces[2],
}));

const TableHeaderCell = styled.td(({ theme }) => ({
  padding: theme.spaces[2],
  backgroundColor: theme.colors.surface[300],
}));

export default {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell
};
