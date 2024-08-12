import { FC, useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Client } from '~/domain/entities/Client';
import { createClient } from '~/domain/use-cases/create-client';
import { getRoute } from '~/domain/use-cases/get-route';
import { listClients } from '~/domain/use-cases/list-client';
import { ClientsPageContainer } from './ui';

export const ClientsPageScreen: FC = () => {
  // State variables for filters
  const [route, setRoute] = useState<Client[]>();
  const [nameFilter, setNameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [phoneFilter, setPhoneFilter] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
  const [isRouteModalOpen, setIsRouteModalOpen] = useState(false);

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
  }, [nameFilter, emailFilter, phoneFilter]);

  const handleOnCreateClient = useCallback(
    async (client: Omit<Client, 'id'>) => {
      const newClient = await createClient({
        email: client.email,
        name: client.name,
        phone: client.phone,
        coordinate_x: client.coordinate_x,
        coordinate_y: client.coordinate_y,
      });

      if (newClient) {
        setIsAddClientModalOpen(false); // Hide modal
      }
    },
    [],
  );

  const handleCalculateRoute = useCallback(async () => {
    const clientRouteList = await getRoute();

    setRoute(clientRouteList);
    setIsRouteModalOpen(true);
  }, []);

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

  return (
    <ClientsPageContainer
      clients={clients}
      route={route}
      isLoading={isLoading}
      error={
        error ? 'Error loading clients. Please try again later.' : undefined
      }
      isPopoverOpen={isPopoverOpen}
      nameFilter={nameFilter}
      emailFilter={emailFilter}
      phoneFilter={phoneFilter}
      isAddClientModalOpen={isAddClientModalOpen}
      isRouteModalOpen={isRouteModalOpen}
      handleApplyFilters={handleApplyFilters}
      handleOnCreateClient={handleOnCreateClient}
      handleCalculateRoute={handleCalculateRoute}
      setNameFilter={setNameFilter}
      setEmailFilter={setEmailFilter}
      setPhoneFilter={setPhoneFilter}
      setIsPopoverOpen={setIsPopoverOpen}
      setIsAddClientModalOpen={setIsAddClientModalOpen}
      setIsRouteModalOpen={setIsRouteModalOpen}
    />
  );
};
