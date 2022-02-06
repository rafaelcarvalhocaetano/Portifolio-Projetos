import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserMSG } from 'src/common/proxy/rabbitmq.enum';

import { ClientProxyFlight } from '../common/proxy/client-proxy';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  // constructor(
  //   private readonly userService: UserService,
  //   private readonly jwtService: JwtService,
  // ) {}

  constructor(private readonly clientProxy: ClientProxyFlight,
    private readonly jwtService: JwtService) {}

  private _clientProxyUser = this.clientProxy.clientProxyUsers();


  async validateUser(username: string, password: string): Promise<any> {
    const user = await this._clientProxyUser.send(UserMSG.VALID, { username, password }).toPromise();
    if (user) return user;
    return null;
  }

  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
    };
    return { access_token: this.jwtService.sign(payload) };
  }

  async signUp(userDTO: CreateUserDto) {
    return await this._clientProxyUser.send(UserMSG.CREATE, userDTO).toPromise();
  }
}
