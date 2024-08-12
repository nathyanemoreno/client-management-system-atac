import { Client } from "~/domain/entities/Client";

export interface AddClientModalProps {
  clients?: Client[];
  onClose: () => void;
}
