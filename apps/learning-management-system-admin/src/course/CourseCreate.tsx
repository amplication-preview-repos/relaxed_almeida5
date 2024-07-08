import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TariffTitle } from "../tariff/TariffTitle";
import { ServerTitle } from "../server/ServerTitle";

export const CourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
