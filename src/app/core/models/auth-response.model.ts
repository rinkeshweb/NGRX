export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;   // Firebase returns string
  localId: string;
  registered?: boolean;
}
