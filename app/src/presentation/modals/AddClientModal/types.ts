export interface AddClientModalProps {
	onClose: () => void;
	onCreate: ({ name, email, phone }) => void;
  }
  