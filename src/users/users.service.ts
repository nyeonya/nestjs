import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateAccountInput } from './dtos/create-account.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    /**계정을 만들기 전 확인해야할것
     * 1.check new user
     * 2.create user && hash the password
     */
    try {
      const exists = await this.users.findOne({ where: { email } });
      if (exists) {
        //
        return { ok: false, error: 'email already' };
      }
      await this.users.save(this.users.create({ email, password, role }));
      return { ok: false };
    } catch (e) {
      return { ok: false, error: 'eeee' };
    }
  }
}
