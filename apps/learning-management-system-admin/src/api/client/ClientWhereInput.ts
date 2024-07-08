import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TariffListRelationFilter } from "../tariff/TariffListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  tariffs?: TariffListRelationFilter;
};
