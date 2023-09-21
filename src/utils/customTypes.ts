export type TSignupUser = {
  fullName: string;
  email: string;
  passwordHash: string;
};

export type TLoginUser = {
  email: string;
  password: string;
};

export type TUserData = {
  fullName: string;
  email: string;
  triviaCompleted: boolean;
};
