import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COURSE_TITLE_FIELD } from "./CourseTitle";
import { SERVER_TITLE_FIELD } from "../server/ServerTitle";
import { TARIFF_TITLE_FIELD } from "../tariff/TariffTitle";

export const CourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Tariff" source="tariff.id" reference="Tariff">
          <TextField source={TARIFF_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Server"
          target="courseId"
          label="Servers"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="server"
              source="server.id"
              reference="Server"
            >
              <TextField source={SERVER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
