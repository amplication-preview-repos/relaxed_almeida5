import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type TariffWhereInput = {
  id?: StringFilter;
  accessDate?: DateTimeNullableFilter;
  courses?: CourseListRelationFilter;
  client?: ClientWhereUniqueInput;
};
