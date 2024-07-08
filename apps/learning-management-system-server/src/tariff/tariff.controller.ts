import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TariffService } from "./tariff.service";
import { TariffControllerBase } from "./base/tariff.controller.base";

@swagger.ApiTags("tariffs")
@common.Controller("tariffs")
export class TariffController extends TariffControllerBase {
  constructor(
    protected readonly service: TariffService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
