/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ServerWhereUniqueInput } from "./ServerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ServerUpdateManyWithoutServersInput {
  @Field(() => [ServerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ServerWhereUniqueInput],
  })
  connect?: Array<ServerWhereUniqueInput>;

  @Field(() => [ServerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ServerWhereUniqueInput],
  })
  disconnect?: Array<ServerWhereUniqueInput>;

  @Field(() => [ServerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ServerWhereUniqueInput],
  })
  set?: Array<ServerWhereUniqueInput>;
}

export { ServerUpdateManyWithoutServersInput as ServerUpdateManyWithoutServersInput };
