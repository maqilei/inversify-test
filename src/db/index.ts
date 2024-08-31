import { PrismaClient } from "@prisma/client";
import { injectable, inject} from "inversify";


@injectable()
export class PrismaDB {
    prisma: PrismaClient;
    constructor (@inject('PrismaClient') PrismaClient: () => PrismaClient) {
        this.prisma = PrismaClient();
    }
}