import { ProfileType, RememberPasswordType } from '../../types/types';

export const TypesRegistration = {
  SET_REGISTRATION: '/reducers/registration/SET_REGISTRATION' as const,
  SET_REMEMBER_PASSWORD: '/reducers/registration/SET_REMEMBER_PASSWORD' as const,
};

export const registrationActions = {
  setRegistation: (formData: ProfileType) => ({
    type: TypesRegistration.SET_REGISTRATION,
    payload: formData,
  }),
  setRememberPassword: (formData: RememberPasswordType) => ({
    type: TypesRegistration.SET_REMEMBER_PASSWORD,
    payload: formData,
  }),
};
