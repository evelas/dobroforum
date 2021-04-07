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
// auth page
export type ActionType = {
  login: string;
  password: string;
  forgotMe: boolean;
}

export type PayloadType = {
  payload: ActionType;

}
// quiz page
export type ActionQuizType = {
  email: string;
  answer: string;
}

export type PayloadQuizType = {
  payload: ActionQuizType;
}

// regestr page
export type PayloadRegType = {
  payload: ProfileType;
}

// remember page
export type PayloadRemType = {
  payload: RememberPasswordType;
}

// search
export type PayloadSearchType = {
  payload: string;
}

// search one user
export type PayloadSearchUserIdType = {
  payload: number;
}

// save after edit profile
export type ActionSaveEditType = {
  formData: ProfileType;
  userId: number;
}

export type PayloadSaveEditType = {
  payload: ActionSaveEditType;
  
}


 