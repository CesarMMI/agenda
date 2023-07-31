import { IUsuario } from '../../models/usuario';

export interface ISignupRequest {
  username: string;
  email: string;
  password: string;
}

export interface ISignupResponse {
  success: boolean;
  message: string;
  data: {
    authenticated: boolean;
    expiration: string;
    token: string;
    usuario: IUsuario;
  };
}
