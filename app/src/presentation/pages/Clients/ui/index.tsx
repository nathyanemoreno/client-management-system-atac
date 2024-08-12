import { FC } from 'react';
import styled from 'styled-components';
import { Client } from '~/domain/entities/Client';
import { Button } from '~/presentation/components/Button';
import { Popover } from '~/presentation/components/Popover';
import { PopoverInput } from '~/presentation/components/PopoverInput';
import { Spinner } from '~/presentation/components/Spinner';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '~/presentation/components/Table';
import ErrorMessage from './components/ErrorMessage';
import { AddClientModal } from './modals/AddClientModal';
import { ShowRouteModal } from './modals/ShowRouteModal';
import { ButtonContainer } from './styled';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

interface ClientsPageContainerProps {
  clients: Client[];
  route: Client[] | undefined;
  isLoading: boolean;
  error: unknown;
  isPopoverOpen: boolean;
  nameFilter: string;
  emailFilter: string;
  phoneFilter: string;
  isAddClientModalOpen: boolean;
  isRouteModalOpen: boolean;
  handleApplyFilters: () => void;
  handleOnCreateClient: (client: Omit<Client, 'id'>) => void;
  handleCalculateRoute: () => void;
  setNameFilter: (value: string) => void;
  setEmailFilter: (value: string) => void;
  setPhoneFilter: (value: string) => void;
  setIsPopoverOpen: (open: boolean) => void;
  setIsAddClientModalOpen: (open: boolean) => void;
  setIsRouteModalOpen: (open: boolean) => void;
}

export const ClientsPageContainer: FC<ClientsPageContainerProps> = ({
  clients,
  route,
  isLoading,
  error,
  isPopoverOpen,
  nameFilter,
  emailFilter,
  phoneFilter,
  isAddClientModalOpen,
  isRouteModalOpen,
  handleApplyFilters,
  handleOnCreateClient,
  handleCalculateRoute,
  setNameFilter,
  setEmailFilter,
  setPhoneFilter,
  setIsPopoverOpen,
  setIsAddClientModalOpen,
  setIsRouteModalOpen,
}) => {
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={'Error ao carregar os clientes'} />;

  return (
    <DashboardContainer>
      <ButtonContainer>
        <Button onClick={() => setIsAddClientModalOpen(!isAddClientModalOpen)}>
          Adicionar cliente
        </Button>
        <Button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          Filtros
        </Button>
        <Button onClick={handleCalculateRoute}>Calcular rota</Button>
      </ButtonContainer>

      {isPopoverOpen && (
        <Popover>
          <PopoverInput
            value={nameFilter}
            placeholder='Name'
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <PopoverInput
            value={emailFilter}
            placeholder='Email'
            onChange={(e) => setEmailFilter(e.target.value)}
          />
          <PopoverInput
            value={phoneFilter}
            placeholder='Phone'
            onChange={(e) => setPhoneFilter(e.target.value)}
          />
          <Button variant='text' onClick={handleApplyFilters}>
            Aplicar
          </Button>
        </Popover>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Phone</TableHeaderCell>
            <TableHeaderCell>X</TableHeaderCell>
            <TableHeaderCell>Y</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client: Client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>{client.coordinate_x}</TableCell>
              <TableCell>{client.coordinate_y}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isAddClientModalOpen && (
        <AddClientModal
          onCreate={handleOnCreateClient}
          onClose={() => setIsAddClientModalOpen(false)}
        />
      )}
      {isRouteModalOpen && (
        <ShowRouteModal
          clients={route}
          onClose={() => setIsRouteModalOpen(false)}
        />
      )}
    </DashboardContainer>
  );
};
