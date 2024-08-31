import 'reflect-metadata'
import { InversifyExpressServer } from "inversify-express-utils";
import { Container } from 'inversify';
import express from 'express'
import { PrismaClient } from '@prisma/client';


import { User } from './src/user/controller';
import { UserService } from './src/user/services';

import { PrismaDB } from './src/db';

const container = new Container();
/**
 * User 模块
 */
container.bind(User).to(User);
container.bind(UserService).to(UserService);

/**
 * 封装 prismaClient
 */

container.bind<PrismaClient>('PrismaClient').toFactory(() => {
    return () => {
        return new PrismaClient();
    }
})

container.bind(PrismaDB).to(PrismaDB)

const server = new InversifyExpressServer(container)

// setConfig 方法暴露 express 对象，在里面可以加载 express 中的中间件
server.setConfig(app => {
    // express 中支持 post 请求的方法
    app.use(express.json())
})
const app = server.build();



app.listen(3000)
