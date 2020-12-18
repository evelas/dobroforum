export const required = (value) => {
  if (value) return undefined;
  return 'Это обязательное поле.';
};

export const emailIsRequired = (value) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Вы не правильно ввели почту.';
  } else {
    return undefined;
  }
};

export const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? 'Пароли не совпадают' : undefined;

export const maxLengthCreator = (maxLength) => {
  return (value) => {
    if (value.length > maxLength) return `max length is ${maxLength}`;
    return undefined;
  };
};
