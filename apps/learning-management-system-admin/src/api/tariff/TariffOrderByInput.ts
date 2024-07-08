import { SortOrder } from "../../util/SortOrder";

export type TariffOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  accessDate?: SortOrder;
  clientId?: SortOrder;
};
