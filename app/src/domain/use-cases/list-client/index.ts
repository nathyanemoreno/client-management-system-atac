import { api } from '~/infra/api';

interface Filter {
    name: string;
    email: string;
    phone: string;
}

export async function listClients(filters: Filter) {
    try {
        const queryParams = new URLSearchParams();

        if (filters.name) queryParams.append('name', filters.name);
        if (filters.email) queryParams.append('email', filters.email);
        if (filters.phone) queryParams.append('phone', filters.phone);

        const response = await api.get(`/client?${queryParams.toString()}`);

        return response.data; // Assuming your API response has a `data` field containing the clients
    } catch (error) {
        console.error('Error fetching clients:', error);
        throw new Error('Failed to fetch clients');
    }
}
