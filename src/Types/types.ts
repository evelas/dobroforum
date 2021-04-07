export type ProfileType = {
  userId: number;
  email: string;
  fullName: string;
  birthday: number;
  isAdmin?: false;
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

// sagas

export type ServerResponse = {
  resultCode: number;
  items: ProfileType | null;
  message?: string;
}

export type ActionType = {
  login: string;
  password: string;
  forgotMe: boolean;
}

export type PayloadType = {
  payload: ActionType;

}