import React from 'react';
import { useDispatch } from 'react-redux';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';
import {
  required,
  emailIsRequired,
  passwordsMatch,
} from '../helpers/validators/validators';
import {
  InputRegistration,
} from '../components/common/formsControls/formsControls';
import { registrationActions } from '../redux/actions';
import { ProfileType } from '../types/types';

const registrationForm: React.FC<InjectedFormProps<ProfileType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="login__container">
      <Field
        name="fullName"
        component={InputRegistration}
        type="text"
        validate={[required]}
        className="login__input"
        placeholder="ФИО"
      />
      <div className="login__group">
        <Field
          name="birthday"
          component={InputRegistration}
          type="date"
          validate={[required]}
          placeholder="Дата рождения"
          className="login__input login__input_small"
        />

        <Field
          name="phone"
          component={InputRegistration}
          type="text"
          validate={[required]}
          placeholder="Телефон"
          className="login__input login__input_small"
        />
      </div>
      <Field
        name="login"
        component={InputRegistration}
        type="text"
        validate={[emailIsRequired]}
        className="login__input"
        placeholder="Адрес электронной почты"
      />
      <div className="login__group">
        <Field
          name="password"
          component={InputRegistration}
          type="password"
          validate={[required, passwordsMatch]}
          placeholder="Пароль"
          className="login__input login__input_small"
        />

        <Field
          name="passwordConfirm"
          component={InputRegistration}
          type="password"
          validate={[required, passwordsMatch]}
          placeholder="Повтор пароля"
          className="login__input login__input_small"
        />
      </div>

      <div>
        <button>Регистрация</button>
        {props.error && (
          <div className="login__misstakes">
            <p> {props.error} </p>
          </div>
        )}
        {props.submitSucceeded && (
          <div className="login__misstakes">
            Вам на почту отправлено письмо
            с активацией аккаунта (проверьте спам).
          </div>
        )}
      </div>
    </form>
  );
};

const RegReduxForm = reduxForm<ProfileType>({
  form: 'registration',
})(registrationForm);

const Registration = () => {
  const dispatch = useDispatch();
  const addUser = (formData: ProfileType) => {
    dispatch(registrationActions.setRegistation(formData));
  };

  return <RegReduxForm onSubmit={addUser} />;
};
export default Registration;

// const selector = formValueSelector('registration');
// export default connect((state) => {
//   // can select values individually
//   const hasPackageValue = selector(state, 'hasPackage');

//   return {
//     hasPackageValue,
//   };
// })(Registration);
