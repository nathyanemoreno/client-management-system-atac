interface UserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

export { CreateUserParams, UserDTO };
