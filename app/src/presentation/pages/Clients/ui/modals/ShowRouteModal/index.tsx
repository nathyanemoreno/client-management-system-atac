import { FC } from 'react';
import { Button } from '~/presentation/components/Button';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '~/presentation/components/Table';
import { Client } from '../..';
import Styled from './styled';
import { AddClientModalProps } from './types';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ScatterController,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ScatterController,
  LinearScale,
  PointElement,
  LineElement,
);

export const ShowRouteModal: FC<AddClientModalProps> = ({
  clients,
  onClose,
}) => {
  const hasClients = clients.length > 0;

  const data = {
    datasets: [
      {
        label: 'Ponto Inicial',
        data: hasClients
          ? [{ x: clients[0].coordinate_x, y: clients[0].coordinate_y }]
          : [],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        showLine: false,
        pointRadius: 6,
      },
      {
        label: 'Rota',
        data: clients.map((client) => ({
          x: client.coordinate_x,
          y: client.coordinate_y,
        })),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        showLine: true,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
      },
    },
  };

  return (
    <Styled.ModalOverlay>
      <Styled.Modal>
        <Styled.Title>Rota</Styled.Title>

        <Styled.TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>X</TableHeaderCell>
                <TableHeaderCell>Y</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client: Client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.coordinate_x}</TableCell>
                  <TableCell>{client.coordinate_y}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Styled.TableContainer>

        <Styled.ChartContainer>
          <Scatter data={data} options={options} />
        </Styled.ChartContainer>

        <Styled.ButtonContainer>
          <Button onClick={onClose}>Fechar</Button>
        </Styled.ButtonContainer>
      </Styled.Modal>
    </Styled.ModalOverlay>
  );
};
