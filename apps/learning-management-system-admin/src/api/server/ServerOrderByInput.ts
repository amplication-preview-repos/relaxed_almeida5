import { SortOrder } from "../../util/SortOrder";

export type ServerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  courseId?: SortOrder;
  serverId?: SortOrder;
};
