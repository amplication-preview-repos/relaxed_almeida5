import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TariffModuleBase } from "./base/tariff.module.base";
import { TariffService } from "./tariff.service";
import { TariffController } from "./tariff.controller";
import { TariffResolver } from "./tariff.resolver";

@Module({
  imports: [TariffModuleBase, forwardRef(() => AuthModule)],
  controllers: [TariffController],
  providers: [TariffService, TariffResolver],
  exports: [TariffService],
})
export class TariffModule {}
