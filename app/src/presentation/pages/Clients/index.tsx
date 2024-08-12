import { useQuery } from '@tanstack/react-query';
import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
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
import { AddClientModal } from '~/presentation/modals/AddClientModal';
import { listClients } from '~/domain/use-cases/listClients';

interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
}

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const ClientsPage: FC = () => {
    // State variables for filters
    const [nameFilter, setNameFilter] = useState('');
    const [emailFilter, setEmailFilter] = useState('');
    const [phoneFilter, setPhoneFilter] = useState('');
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);

    // State to manage query enabled status
    const [queryEnabled, setQueryEnabled] = useState(false);

    // Store filters to apply
    const [appliedFilters, setAppliedFilters] = useState({
        name: '',
        email: '',
        phone: '',
    });

    // Query to fetch clients with filters
    const {
        data: clients = [],
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ['clients', appliedFilters],
        queryFn: () => listClients(appliedFilters),
        enabled: queryEnabled, // Control when the query is enabled
    });

    const handleApplyFilters = useCallback(() => {
        setAppliedFilters({
            name: nameFilter,
            email: emailFilter,
            phone: phoneFilter,
        });
        setQueryEnabled(true); // Enable the query
        setIsPopoverOpen(false);
    }, []);

    const handleOnCreateClient = useCallback(() => {

    },[])
    
    useEffect(() => {
        // Fetch data initially when component mounts
        setQueryEnabled(true); // Enable the query to fetch data initially
    }, []);

    useEffect(() => {
        // Refetch when filters change, but only if the query is enabled
        if (queryEnabled) {
            refetch();
        }
    }, [appliedFilters, queryEnabled, refetch]);

    if (isLoading) return <Spinner />;
    if (error) return <div>Error loading clients</div>;

    return (
        <DashboardContainer>
            <Button
                onClick={() => setIsAddClientModalOpen(!isAddClientModalOpen)}
            >
                Adicionar cliente
            </Button>

            <Button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                Filtros
            </Button>

            {isPopoverOpen && (
                <Popover>
                    <PopoverInput
                        value={nameFilter}
                        placeholder="Name"
                        onChange={(e) => setNameFilter(e.target.value)}
                    />
                    <PopoverInput
                        value={emailFilter}
                        placeholder="Email"
                        onChange={(e) => setEmailFilter(e.target.value)}
                    />
                    <PopoverInput
                        value={phoneFilter}
                        placeholder="Phone"
                        onChange={(e) => setPhoneFilter(e.target.value)}
                    />
                    <Button variant="text" onClick={handleApplyFilters}>
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
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {clients.map((client: Client) => (
                        <TableRow key={client.id}>
                            <TableCell>{client.name}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>{client.phone}</TableCell>
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
        </DashboardContainer>
    );
};
