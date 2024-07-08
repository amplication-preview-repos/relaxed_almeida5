import { TariffWhereInput } from "./TariffWhereInput";
import { TariffOrderByInput } from "./TariffOrderByInput";

export type TariffFindManyArgs = {
  where?: TariffWhereInput;
  orderBy?: Array<TariffOrderByInput>;
  skip?: number;
  take?: number;
};
