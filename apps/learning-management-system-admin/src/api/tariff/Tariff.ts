import { Course } from "../course/Course";
import { Client } from "../client/Client";

export type Tariff = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  accessDate: Date | null;
  courses?: Array<Course>;
  client?: Client | null;
};
