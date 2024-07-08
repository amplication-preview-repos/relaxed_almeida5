/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CourseService } from "../course.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CourseCreateInput } from "./CourseCreateInput";
import { Course } from "./Course";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseWhereUniqueInput } from "./CourseWhereUniqueInput";
import { CourseUpdateInput } from "./CourseUpdateInput";
import { ServerFindManyArgs } from "../../server/base/ServerFindManyArgs";
import { Server } from "../../server/base/Server";
import { ServerWhereUniqueInput } from "../../server/base/ServerWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CourseControllerBase {
  constructor(
    protected readonly service: CourseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Course })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCourse(@common.Body() data: CourseCreateInput): Promise<Course> {
    return await this.service.createCourse({
      data: {
        ...data,

        tariff: data.tariff
          ? {
              connect: data.tariff,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        tariff: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Course] })
  @ApiNestedQuery(CourseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async courses(@common.Req() request: Request): Promise<Course[]> {
    const args = plainToClass(CourseFindManyArgs, request.query);
    return this.service.courses({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        tariff: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async course(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    const result = await this.service.course({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        tariff: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCourse(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() data: CourseUpdateInput
  ): Promise<Course | null> {
    try {
      return await this.service.updateCourse({
        where: params,
        data: {
          ...data,

          tariff: data.tariff
            ? {
                connect: data.tariff,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          tariff: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Course })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCourse(
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Course | null> {
    try {
      return await this.service.deleteCourse({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          tariff: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/servers")
  @ApiNestedQuery(ServerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "read",
    possession: "any",
  })
  async findServers(
    @common.Req() request: Request,
    @common.Param() params: CourseWhereUniqueInput
  ): Promise<Server[]> {
    const query = plainToClass(ServerFindManyArgs, request.query);
    const results = await this.service.findServers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        course: {
          select: {
            id: true,
          },
        },

        server: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/servers")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async connectServers(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: ServerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      servers: {
        connect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/servers")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateServers(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: ServerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      servers: {
        set: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/servers")
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async disconnectServers(
    @common.Param() params: CourseWhereUniqueInput,
    @common.Body() body: ServerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      servers: {
        disconnect: body,
      },
    };
    await this.service.updateCourse({
      where: params,
      data,
      select: { id: true },
    });
  }
}
