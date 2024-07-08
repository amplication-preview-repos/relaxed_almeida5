import { StringFilter } from "../../util/StringFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ServerListRelationFilter } from "./ServerListRelationFilter";
import { ServerWhereUniqueInput } from "./ServerWhereUniqueInput";

export type ServerWhereInput = {
  id?: StringFilter;
  course?: CourseWhereUniqueInput;
  servers?: ServerListRelationFilter;
  server?: ServerWhereUniqueInput;
};
