
export interface SurveyAttribute {
  index?: number;
  route?: string;
  logo?: string;
  prevIndex?: number;
  nextIndex?: number;
  headline?: string,
  description?: string
}

export interface UserInfo {
  id?: string;
  email?: string;
  password?: string;
  person?: Person;
  name?: string;
  course?: string;
  sy?: string;
  takeAdvanceClasses?: string;
  fluentInForeignLang?: string;
  participateMusic?: string;
  participateArts?: string;
  college?: string;
}

export enum Person {
  Parent = 'Parent',
  Student = 'Student'
}

export enum Option {
  Yes = 'Yes',
  No = 'No'
}


