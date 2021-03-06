import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';
import { required, emailIsRequired } from '../helpers/validators/validators';
import {
  InputRegistration,
} from '../components/common/formsControls/formsControls';
import { authActions } from '../redux/actions';
import Timer from '../components/common/Timer2';
import Header from '../components/Header';
import classnames from 'classnames';
import RememberPassword from './RememberPassword';
import Registration from './Registration';
import { AppStateType } from '../redux/reducers';
import { LoginFormOwnProps, LoginFormValuesType } from '../types/types';



const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
  const [visiable, setVisiable] = React.useState(false);
  const handleVisible = () => {
    setVisiable(true);
  };

  return (
    <div className="login__container">
      <form onSubmit={props.handleSubmit}>
        <Field
          className="login__input"
          name="login"
          component={InputRegistration}
          type="text"
          validate={[emailIsRequired]}
          placeholder="Логин"
        />

        <Field
          className="login__input"
          name="password"
          component={InputRegistration}
          type="password"
          validate={[required]}
          placeholder="Пароль"
        />
        <div className="login__checkbox">
          <Field name="forgotMe" component="input" type="checkbox" />
          <p>Не запоминать</p>
        </div>

        <div>
          <button disabled={props.isDisabled}>Вход</button>
          {props.isDisabled && (
            <Timer
              visible={props.isDisabled}
              text={'Время до повторной попытки: '}
              type={'login'}
            />
          )}
          {props.error && (
            <div className="login__misstakes">
              <p> {props.error} </p>
            </div>
          )}
        </div>

        <div className="login__forgot">
          <p onClick={handleVisible}>Забыли пароль?</p>
        </div>
      </form>
      {visiable && <RememberPassword />}
    </div>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: 'login',
})(LoginForm);
 
 
// type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const Login: React.FC = () => {
  const [visiable, setVisiable] = React.useState(true);

  const dispatch = useDispatch();
 
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const isTryTime = useSelector((state: AppStateType) => state.auth.isTryTime);

  const getLoginData = (formData: LoginFormValuesType) => {
    dispatch(authActions.setLogin(
      formData.login,
      formData.password,
      formData.forgotMe),
    );
  };
  const handleLogin = () => {
    setVisiable(true);
  };
  const handleRegestration = () => {
    setVisiable(false);
  };

  if (isAuth) {
    return <Redirect to="/профиль" />;
  }
  return (
    <div className="login">
      <div className="wrapper">
        <Header logo={false} />
        <div className="login__main">
          <div className="login__form">
            <div className="login__panel">
              <div
                className={classnames('login__log', {
                  active: visiable === true,
                })}
                onClick={handleLogin}>
                <h2>Вход</h2>
              </div>
              <div
                className={classnames(null, {
                  active: visiable === false,
                })}
                onClick={handleRegestration}>
                <h2>Регистрация</h2>
              </div>
            </div>
            {visiable ? (
              <LoginReduxForm onSubmit={getLoginData} isDisabled={isTryTime} />
            ) : (
              <Registration />
            )}
          </div>
          <div className="login__about">
            <h2>Важно!</h2>
            <p>
              Дорогой друг, чтобы воспользоваться всем доступным
              онлайн-интерактивом Форума, тебе необходимо зарегистрироваться
              и авторизоваться на сайте. Сделав это, ты сможешь принять участие
              в QR-викторине и выиграть памятные подарки, проголосовать за
              номинантов, получив при этом баллы для памятных подарков,
              ежегодной премии “ТОП 25. Самые добрые люди Петербурга”,
              а также получить электронный сертификат участника Форума.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
