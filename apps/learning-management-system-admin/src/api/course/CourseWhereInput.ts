import { StringFilter } from "../../util/StringFilter";
import { TariffWhereUniqueInput } from "../tariff/TariffWhereUniqueInput";
import { ServerListRelationFilter } from "../server/ServerListRelationFilter";

export type CourseWhereInput = {
  id?: StringFilter;
  tariff?: TariffWhereUniqueInput;
  servers?: ServerListRelationFilter;
};
