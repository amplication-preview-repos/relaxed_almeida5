import { TariffCreateNestedManyWithoutClientsInput } from "./TariffCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
  tariffs?: TariffCreateNestedManyWithoutClientsInput;
};
