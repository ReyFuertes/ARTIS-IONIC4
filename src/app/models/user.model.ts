import { UserInfo } from "./survey.model";

export interface User {
  uid?: string;
  apiKey?: string;
  displayName?: string;
  email: string;
  userInfo?: any;
}

export class Recommendations {
  content?: string;
  schedulePeg?: string;
  type?: string;
}


