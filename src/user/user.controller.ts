import { Body,Controller, Post, Get, Req, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserResponseInterface } from "./types/userResponse.interface";
import { LoginUserDto } from "./dto/login.dto";
import { Request } from "express";
import { ExpressRequestInterface } from "@app/types/expressRequest.interface";
@Controller('users')
export class UserController{
    constructor(
        private readonly userService: UserService
        ){}
    @Post()
    @UsePipes(new ValidationPipe())
    async createUser(@Body('user') createUserDto: CreateUserDto
    ): Promise<Promise<UserResponseInterface>>{
        const user = await this.userService.createUser(createUserDto);
        return this.userService.buildUserResponse(user);
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body('user') loginUserDto: LoginUserDto
    ): Promise<Promise<UserResponseInterface>>{
        const user = await this.userService.login(loginUserDto);
        return this.userService.buildUserResponse(user);
    }
    @Get('me')
    async currentUser(@Req() request: ExpressRequestInterface
    ): Promise <Promise<UserResponseInterface>>{
        return this.userService.buildUserResponse(request.user);
    }
}

