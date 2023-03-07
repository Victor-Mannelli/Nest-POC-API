import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello() {
    const newUser = await this.prisma.User.create({
      data: {
        username: 'cleber',
        password: 'cleber',
        email: 'asd@asd.com',
      },
    });
    return {
      newUser,
    };
  }
}
