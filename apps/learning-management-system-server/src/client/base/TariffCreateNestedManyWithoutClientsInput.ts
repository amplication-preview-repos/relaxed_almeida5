/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TariffWhereUniqueInput } from "../../tariff/base/TariffWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TariffCreateNestedManyWithoutClientsInput {
  @Field(() => [TariffWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TariffWhereUniqueInput],
  })
  connect?: Array<TariffWhereUniqueInput>;
}

export { TariffCreateNestedManyWithoutClientsInput as TariffCreateNestedManyWithoutClientsInput };