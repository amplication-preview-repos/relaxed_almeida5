/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TariffWhereUniqueInput } from "./TariffWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteTariffArgs {
  @ApiProperty({
    required: true,
    type: () => TariffWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TariffWhereUniqueInput)
  @Field(() => TariffWhereUniqueInput, { nullable: false })
  where!: TariffWhereUniqueInput;
}

export { DeleteTariffArgs as DeleteTariffArgs };
