export type ProfileType = {
  userId: number;
  email: string;
  fullName: string;
  birthday: number;
  phone: number;
  cloneVk: string;
  vk: string;
  ball: number;
};

export type RememberPasswordType = {
  login: string;
};

export type LoginFormValuesType = {
  login: string;
  forgotMe: boolean;
  password: string;
}


export type LoginFormOwnProps = {
  isDisabled: boolean;
}