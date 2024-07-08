import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ServerUpdateManyWithoutServersInput } from "./ServerUpdateManyWithoutServersInput";
import { ServerWhereUniqueInput } from "./ServerWhereUniqueInput";

export type ServerUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  servers?: ServerUpdateManyWithoutServersInput;
  server?: ServerWhereUniqueInput | null;
};
