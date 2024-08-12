export namespace CreateClient {
  export type Parameters = {
    name: string;
    phone: string;
    email: string;
    coordinate_x?: number;
    coordinate_y?: number;
  };

  export type Response = {
    id: string;
    name: string;
    phone: string;
    email: string;
    coordinate_x: number;
    coordinate_y: number;
  };

  export enum Keys {
    CREATE_CLIENT = 'CREATE_CLIENT',
  }
}
