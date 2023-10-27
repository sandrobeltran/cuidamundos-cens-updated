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
  _id: string
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

export interface IEvidence {
  _id: string,
  title: string,
  description: string,
  active: boolean,
  comments: IComment[],
  submissions: ISubmission[],
  deadline: string
}
export interface IComment {
  author: string,
  content: string,
}
export interface ISubmission {
  author: string,
  state: number,
  lastUpdatedAt: string,
  submitedAt: string,
  content: {
    answer: string,
    link: string
  }
}