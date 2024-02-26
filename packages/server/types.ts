export interface User {
  id: any;
  name: String;
  email: String;
  role: String;
}

export interface AddUserInput {
  name: String;
  email: String;
  role: String;
}
