import { controller, httpGet as Get, httpPost as Post } from 'inversify-express-utils'

import { UserService } from './services'
import { inject } from 'inversify'
import type { Request, Response } from 'express'

@controller('/user')
export class User {
    constructor(@inject(UserService) private readonly UserService: UserService) {

    }

    @Get('/index')
    public async getIndex(req: Request, res: Response) {

        let result = await this.UserService.getList()
        res.send(result)
    }

    @Post('/create')
    public async createUser(req: Request, res: Response) {
        let result = await this.UserService.createUser(req.body);
        res.send(result)
    }
}