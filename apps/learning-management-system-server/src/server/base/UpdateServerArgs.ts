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
import { ServerWhereUniqueInput } from "./ServerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ServerUpdateInput } from "./ServerUpdateInput";

@ArgsType()
class UpdateServerArgs {
  @ApiProperty({
    required: true,
    type: () => ServerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServerWhereUniqueInput)
  @Field(() => ServerWhereUniqueInput, { nullable: false })
  where!: ServerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ServerUpdateInput,
  })
  @ValidateNested()
  @Type(() => ServerUpdateInput)
  @Field(() => ServerUpdateInput, { nullable: false })
  data!: ServerUpdateInput;
}

export { UpdateServerArgs as UpdateServerArgs };
