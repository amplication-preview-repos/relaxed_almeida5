import { Course } from "../course/Course";

export type Server = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  course?: Course | null;
  servers?: Array<Server>;
  server?: Server | null;
};
