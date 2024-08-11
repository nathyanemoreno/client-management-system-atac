interface ClientDTO {
  id: string;
  name: string;
  phone: string;
  email: string;
  coordinate_x: number;
  coordinate_y: number;
}

interface CreateClientBody {
  name: string;
  phone: string;
  email: string;
  coordinate_x: number;
  coordinate_y: number;
}

interface ListClientReqQuery {
  name?: string;
  phone?: string;
  email?: string;
  limit: number;
  offset: number;
}

export { ClientDTO, CreateClientBody, ListClientReqQuery };

