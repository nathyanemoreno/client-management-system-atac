import { Client } from '~/domain/entities/Client';

export interface AddClientModalProps {
  onClose: () => void;
  onCreate: (data: Omit<Client, 'id'>) => void;
}
