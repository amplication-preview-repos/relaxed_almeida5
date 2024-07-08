import { Tariff } from "../tariff/Tariff";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  tariffs?: Array<Tariff>;
};
