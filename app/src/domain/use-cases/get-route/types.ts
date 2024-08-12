import { Client } from "../../../../../api/src/types/models/client";

export namespace GetRoute {
  export type Parameters = {};

  export type Response = Client[];

  export enum Keys {
    GET_ROUTE = 'GET_ROUTE',
  }
}
