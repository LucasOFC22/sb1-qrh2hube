export interface FreightQuote {
  cargo: {
    description: string;
    weight: number;
    length: number;
    width: number;
    height: number;
    value: number;
    quantity: number;
  };
  sender: {
    name: string;
    document: string;
    phone: string;
    email: string;
    address: {
      street: string;
      number: string;
      complement: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  recipient: {
    name: string;
    document: string;
    phone: string;
    email: string;
    address: {
      street: string;
      number: string;
      complement: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  contactPreference: 'whatsapp' | 'email';
  contactValue: string;
}