import { Tariff as TTariff } from "../api/tariff/Tariff";

export const TARIFF_TITLE_FIELD = "id";

export const TariffTitle = (record: TTariff): string => {
  return record.id?.toString() || String(record.id);
};
