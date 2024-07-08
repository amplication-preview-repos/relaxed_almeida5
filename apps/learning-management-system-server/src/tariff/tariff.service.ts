import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TariffServiceBase } from "./base/tariff.service.base";

@Injectable()
export class TariffService extends TariffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
