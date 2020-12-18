import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchUserActions } from '../../../redux/actions';
import { Field, reduxForm } from 'redux-form';
import Preloader from '../../../components/common/Preloader';

const UserProfileForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="login" component="input" type="text" title="Логин-почта" disabled />
      <Field
        name="activation_link"
        component="input"
        type="text"
        title="activation_link"
        placeholder="activation_link"
      />
      <Field name="phone" component="input" type="text" title="Телефон" placeholder="Телефон" />
      <Field name="ball" component="input" type="text" title="ball" placeholder="ball" />
      <Field
        name="fullName"
        component="input"
        type="text"
        title="fullName"
        placeholder="fullName"
      />
      <Field
        name="activation"
        component="input"
        type="text"
        title="activation"
        placeholder="activation"
      />
      <Field
        name="birthday"
        component="input"
        type="text"
        title="День Рождения"
        placeholder="День Рождения"
      />

      <div>
        <button>Сохранить</button>
      </div>
      {props.submitSucceeded && <div>Сохранено</div>}
    </form>
  );
};

const UserProfileReduxForm = reduxForm({
  form: 'form-edit',
})(UserProfileForm);

const UsersProfile = withRouter((props) => {
  const dispatch = useDispatch();
  const { isLoaded, userData } = useSelector(({ searchUser }) => searchUser);
  const userId = props.match.params.userId;
  React.useEffect(() => {
    dispatch(searchUserActions.loadOneUser(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.userId]);

  const sendNewProfileData = (formData) => {
    dispatch(searchUserActions.saveProfile(formData, userId));
  };

  return (
    <div>
      {isLoaded ? (
        <UserProfileReduxForm onSubmit={sendNewProfileData} initialValues={userData} />
      ) : (
        <Preloader />
      )}
    </div>
  );
});

export default UsersProfile;
