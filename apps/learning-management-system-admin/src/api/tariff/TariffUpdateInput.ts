import { CourseUpdateManyWithoutTariffsInput } from "./CourseUpdateManyWithoutTariffsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type TariffUpdateInput = {
  accessDate?: Date | null;
  courses?: CourseUpdateManyWithoutTariffsInput;
  client?: ClientWhereUniqueInput | null;
};
