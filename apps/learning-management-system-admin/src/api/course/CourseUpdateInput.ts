import { TariffWhereUniqueInput } from "../tariff/TariffWhereUniqueInput";
import { ServerUpdateManyWithoutCoursesInput } from "./ServerUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  tariff?: TariffWhereUniqueInput | null;
  servers?: ServerUpdateManyWithoutCoursesInput;
};
