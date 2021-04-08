// import { LoginFormValuesType, ServerResponse, ProfileType } from './../../types/types';
import { combineReducers } from 'redux';
import auth from './auth';
import initialize from './initialize';
import search from './search';
import searchUser from './searchUser';
import rememberPassword from './rememberPassword';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  auth,
  form,
  initialize,
  rememberPassword,
  search,
  searchUser,
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

// infer type - додумывание типов
// тип InferActionsTypes для того, чтобы определить тип того, что вернет нам функция, которая находится в объекте
// в данном случае тип T выполняет условие -  если он объект extends { }
// наши keys - setAuthUserData, loadUserData, setLogin from authActions etc
// а его значение это функция. Например: () => ({type: TypesAuth.LOAD_USER_DATA})
// берем все аргументы и присваиваем им any, а то что эта функция вернет додумай сам infer
// eslint-disable-next-line
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never;

export default reducers;

// // extends conditional type
// // если в типе T есть ProfileType, то
// type ForTest<T> = T extends ProfileType ? LoginFormValuesType : T extends 'another value' ? ServerResponse : number
// // при этом переменная а будет типом ServerResponse, а не ProfileType
// // конструкция ForTest<ProfileType> превратится в LoginFormValuesType
// // если добавить или 'another value', то в а можно будет записывать и ServerResponse type
// // при этом  в переменной а должно быть обязательно какой-то одно из условий полностью соблюсти
// // либо там все типы от LoginFormValuesType либо все типы от ServerResponse
// const a: ForTest<ProfileType | 'another value'> = {
//   login: 'text',
//   forgotMe: true,
//   password: 'string',
//   resultCode: 1,
  
// }
// const b: ForTest<'another value'> = {
//   resultCode: 1,
//   items: null,
  
// }
// console.log(a, b)

// // infer
// const obj = {
//   a: { name: 'nick' },
//   b: { age: 18 },
//   c: { site: { title: 'website' }}
// }
// type ObjType = typeof obj.a | typeof obj.b | typeof obj.c;
// // нужно передать typeof obj чтобы не писать их постоянно в generic
// // Так как U не существует, то мы пишем infer, говорим TS, чтоб он додумал тип сам
// // наш динамический тип T если он объект, в которым ключи это строки, а значения додуймай их тип сам с помощью infer
// // если это условие true, то верни нам типы значений по ключам в этом объекте
// type ObjTypeWithInfer<T> = T extends {[keys: string]: infer U } ? U : never;

// const someObj: ObjType = { name: 'privet', site: { title: 'str' }};
// const someObjWithInfer: ObjTypeWithInfer<typeof obj> = { name: 'privet', site: { title: 'str' }};

// console.log(obj, someObj, someObjWithInfer)