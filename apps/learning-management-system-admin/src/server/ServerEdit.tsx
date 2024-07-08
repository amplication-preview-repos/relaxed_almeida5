import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { ServerTitle } from "./ServerTitle";

export const ServerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="servers"
          reference="Server"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ServerTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="server.id" reference="Server" label="server">
          <SelectInput optionText={ServerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
