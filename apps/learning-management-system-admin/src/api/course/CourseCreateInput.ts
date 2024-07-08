import { TariffWhereUniqueInput } from "../tariff/TariffWhereUniqueInput";
import { ServerCreateNestedManyWithoutCoursesInput } from "./ServerCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  tariff?: TariffWhereUniqueInput | null;
  servers?: ServerCreateNestedManyWithoutCoursesInput;
};
