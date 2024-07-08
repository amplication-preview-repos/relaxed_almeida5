import { CourseCreateNestedManyWithoutTariffsInput } from "./CourseCreateNestedManyWithoutTariffsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type TariffCreateInput = {
  accessDate?: Date | null;
  courses?: CourseCreateNestedManyWithoutTariffsInput;
  client?: ClientWhereUniqueInput | null;
};
