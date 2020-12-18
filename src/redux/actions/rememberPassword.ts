import { RememberPasswordType } from '../../Types/types';

export const TypesRememberPassword = {
  SET_REMEMBER_PASSWORD: '/reducers/rememberPassword/SET_REMEMBER_PASSWORD' as const,
  TRY_TIME_DISABLED: '/reducers/rememberPassword/TRY_TIME_DISABLED' as const,
};

export const rememberPasswordActions = {
  setRememberPassword: (formData: RememberPasswordType) => ({
    type: TypesRememberPassword.SET_REMEMBER_PASSWORD,
    payload: formData,
  }),
  setTryTimeButton: (disabled: boolean) => ({
    type: TypesRememberPassword.TRY_TIME_DISABLED,
    payload: disabled,
  }),
};
