/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Course } from "../../course/base/Course";
import { Client } from "../../client/base/Client";

@ObjectType()
class Tariff {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  accessDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [Course],
  })
  @ValidateNested()
  @Type(() => Course)
  @IsOptional()
  courses?: Array<Course>;

  @ApiProperty({
    required: false,
    type: () => Client,
  })
  @ValidateNested()
  @Type(() => Client)
  @IsOptional()
  client?: Client | null;
}

export { Tariff as Tariff };
