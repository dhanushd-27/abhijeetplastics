export interface Client {
  src: string;
  name: string;
}

export interface ClientType {
  title: string;
  clients: Client[];
}

export interface AutomotiveCustomer {
  category: string;
  types: ClientType[];
}

export interface NonAutoCustomer {
  category: string;
  types: {
    title: string;
    clients: Client[];
  };
}

export type ClientsData = (AutomotiveCustomer | NonAutoCustomer)[];

// Type guards for better type safety
export function isAutomotiveCustomer(customer: AutomotiveCustomer | NonAutoCustomer): customer is AutomotiveCustomer {
  return Array.isArray(customer.types);
}

export function isNonAutoCustomer(customer: AutomotiveCustomer | NonAutoCustomer): customer is NonAutoCustomer {
  return !Array.isArray(customer.types);
}
