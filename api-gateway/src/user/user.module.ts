import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ProxyModule } from '../common/proxy/client-proxy.modele';

@Module({
  imports: [ProxyModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
