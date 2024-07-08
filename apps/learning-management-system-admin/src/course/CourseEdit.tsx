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

import { TariffTitle } from "../tariff/TariffTitle";
import { ServerTitle } from "../server/ServerTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="tariff.id" reference="Tariff" label="Tariff">
          <SelectInput optionText={TariffTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="servers"
          reference="Server"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ServerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
