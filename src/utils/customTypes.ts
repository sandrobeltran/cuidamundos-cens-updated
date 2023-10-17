export type TSignupUser = {
  name: string;
  lastname: string;
  email: string;
  passwordHash: string;
};

export type TLoginUser = {
  email: string;
  password: string;
};

export type TUserData = {
  name: string,
  lastname: string,
  birthdate: string,
  email: string,
  address: string,
  phone: number,
  school: string,
  bio: string,
  avatar: string
};

export interface IUserCertificate {

}