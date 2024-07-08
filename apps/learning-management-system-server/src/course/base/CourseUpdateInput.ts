/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TariffWhereUniqueInput } from "../../tariff/base/TariffWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ServerUpdateManyWithoutCoursesInput } from "./ServerUpdateManyWithoutCoursesInput";

@InputType()
class CourseUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TariffWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TariffWhereUniqueInput)
  @IsOptional()
  @Field(() => TariffWhereUniqueInput, {
    nullable: true,
  })
  tariff?: TariffWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ServerUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => ServerUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => ServerUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  servers?: ServerUpdateManyWithoutCoursesInput;
}

export { CourseUpdateInput as CourseUpdateInput };
