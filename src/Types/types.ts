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

// main type
export type PayloadType<T> = {
  payload: T;
}

  // quiz page
  export type ActionQuizType = {
    email: string;
    answer: string;
  }

  // save after edit profile
  export type ActionSaveEditType = {
    formData: ProfileType;
    userId: number;
  }



 