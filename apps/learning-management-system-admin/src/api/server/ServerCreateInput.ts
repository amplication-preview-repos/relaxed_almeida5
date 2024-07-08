import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ServerCreateNestedManyWithoutServersInput } from "./ServerCreateNestedManyWithoutServersInput";
import { ServerWhereUniqueInput } from "./ServerWhereUniqueInput";

export type ServerCreateInput = {
  course?: CourseWhereUniqueInput | null;
  servers?: ServerCreateNestedManyWithoutServersInput;
  server?: ServerWhereUniqueInput | null;
};
