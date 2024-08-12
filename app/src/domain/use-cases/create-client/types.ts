export namespace CreateClient {
    export type Parameters = {
        name: string;
        phone: string;
        email: string;
        address: {
            latitude: string;
            longitude: string;
        };
    };

    export type Response = {
        id: string;
        name: string;
        phone: string;
        email: string;
        address: {
            latitude: string;
            longitude: string;
        };
    };

    export enum Keys {
        CREATE_CLIENT = 'CREATE_CLIENT',
    }
}
