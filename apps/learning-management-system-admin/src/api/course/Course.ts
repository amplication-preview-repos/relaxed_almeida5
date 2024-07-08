import { Tariff } from "../tariff/Tariff";
import { Server } from "../server/Server";

export type Course = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tariff?: Tariff | null;
  servers?: Array<Server>;
};
