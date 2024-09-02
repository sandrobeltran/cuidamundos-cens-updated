export type TSignupUser = {
  name: string;
  lastname: string;
  username: string;
  city: string;
  passwordHash: string;
  institutionId: "" | string;
};

export type TLoginUser = {
  username: string;
  password: string;
};

export type TUserRole = "USER" | "ADMIN";

export type TUserData = {
  _id: string;
  name: string;
  username: string;
  lastname: string;
  city: string;
  avatar: string;
  points: number;
  bio: string;
  role: TUserRole;
  institutionData: IAuthorInstitutionData;
  hasSecurityQuestions: boolean;
};

export interface ISecurityQuestion {
  question: string;
  answer: string;
}

export interface IUserCertificate {}

export interface IAuthor {
  _id: string;
  name: string;
  lastname: string;
  avatar: string;
}

/* EVIDENCES */

export interface IEvidence {
  _id: string;
  title: string;
  description: string;
  active: boolean;
  comments: IComment[];
  submissions: ISubmission[];
  deadline: string;
  createdAt: string;
  updatedAt: string;
  deliveryDate: string;
  enabledOptions: {
    text: boolean;
    links: boolean;
    docs: boolean;
    images: boolean;
  };
}

export interface IComment {
  _id: number;
  author: string;
  content: string;
}

export interface IAdminAuthor {
  _id: string;
  name: string;
  lastname: string;
  avatar: string;
  role: TUserRole;
  institutionData: IAuthorInstitutionData;
}

export interface IAuthorInstitutionData {
  city: string;
  name: string;
  _id: string;
  classCode: string; //? e.g. "4B"
}

export interface ISubmission {
  author: string | IAdminAuthor;
  state: number;
  lastUpdatedAt: string;
  submitedAt: string;
  content: {
    answer: string;
    link: string;
    files: string[];
  };
}
export interface IEvidenceFile {
  _id: string;
  chunk: any;
  type: string;
  filename: string;
}

export interface IGame {
  _id: string;
  title: string;
  description: string;
  type: "trivia" | "test" | "mobile" | "videogame";
  href: string;
  cover: string;
  active: boolean;
  points: number;
  winners: string[];
}

/* MOBILE GAMES */
export interface IMobileGame extends IGame {
  matches: { uid: string; time: number; score: number }[];
}

/* TRIVIAS */

export interface ITrivia extends IGame {
  data: {
    questions: ITriviaQuestion[];
    timeLimit: number;
  };
}

export interface ITriviaQuestion {
  id: number;
  title: string;
  options: string[];
  answer: string;
  image: string;
}

/* TESTS */
export interface ITest extends IGame {
  data: {
    questions: ITestQuestion[];
    ranges: ITestRange[];
    maxMessage: string;
  };
}

export interface ITestQuestion {
  id: number;
  title: string;
  options: {
    title: string;
    percent: number;
    co2: number;
    lt: number;
  }[];
  image: string;
}

export interface ITestRange {
  limit: number;
  message: string;
}

export interface IInstitution {
  _id: string;
  name: string;
  city: string;
  createdAt: string;
  updatedAt: string;
}
