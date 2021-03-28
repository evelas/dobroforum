import React from 'react';
import classNames from 'classnames';

export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div>
      <input {...input} {...props} />
      {hasError && <span> {error}</span>}
      <span></span>
    </div>
  );
};

export const InputRegistration = ({
  input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div
      className={classNames('registration__input', {
        error:
          (touched && hasError === 'Это обязательное поле.') ||
          (touched && hasError === 'Вы не правильно ввели почту.') ||
          (touched && hasError === 'Пароли не совпадают'),
      })}>
      <input {...input} {...props} />
      {hasError && <span> {error}</span>}
    </div>
  );
};

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span> {error}</span>}
      <span></span>
    </div>
  );
};
