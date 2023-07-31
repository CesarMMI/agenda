import { IUsuario } from '../../models/usuario';

export interface ILoginRequest {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface ILoginResponse {
  success: boolean;
  message: string;
  data: {
    authenticated: boolean;
    expiration: string;
    token: string;
    usuario: IUsuario;
  };
}
