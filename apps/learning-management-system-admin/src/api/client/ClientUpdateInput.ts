import { TariffUpdateManyWithoutClientsInput } from "./TariffUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
  tariffs?: TariffUpdateManyWithoutClientsInput;
};
