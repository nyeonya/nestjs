import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { UsersRecolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersRecolver, UsersService],
})
export class UsersModule {}