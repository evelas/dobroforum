import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';
import { required } from '../helpers/validators/validators';
import {
  InputRegistration,
} from '../components/common/formsControls/formsControls';
import { rememberPasswordActions } from '../redux/actions';
import Timer from '../components/common/Timer2';
import { AppStateType } from '../redux/reducers';
import { LoginFormOwnProps, RememberPasswordType } from '../types/types';

const rememberForm: React.FC<InjectedFormProps<RememberPasswordType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="login__send">
      <div>
        <Field
          name="login"
          component={InputRegistration}
          type="text"
          validate={[required]}
          className="login__input"
          placeholder="Введите почту"
        />
      </div>
      <div>
        <button disabled={props.isDisabled}>Отправить</button>
        {props.error && (
          <div className="login__misstakes">
            <p> {props.error} </p>
          </div>
        )}
        {props.isDisabled && (
          <Timer
            visible={props.isDisabled}
            text={'Время до повторной попытки: '}
            type={'rememberPassword'}
          />
        )}
      </div>
    </form>
  );
};

const RememberReduxForm = reduxForm<RememberPasswordType, LoginFormOwnProps>({
  form: 'rememberPassword',
})(rememberForm);

function RememberPassword() {
  const dispatch = useDispatch();
  // const { isTryTime } = useSelector(({ rememberPassword }) => rememberPassword);
  const isTryTime = useSelector((state: AppStateType) => state.rememberPassword.isTryTime);

  const setNewPassword = (formData: RememberPasswordType) => {
    dispatch(rememberPasswordActions.setRememberPassword(formData));
  };

  return <RememberReduxForm onSubmit={setNewPassword} isDisabled={isTryTime} />;
}

export default RememberPassword;
