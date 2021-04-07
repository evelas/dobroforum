import React from 'react';
import { Link } from 'react-router-dom';
import newlogo from '../assets/img/newlogo.png';
import icon1 from '../assets/img/icon-1.png';
import icon2 from '../assets/img/icon-2.png';
import classnames from 'classnames';
 

export type HeaderOwnProps = {
  logo: boolean;
}

// function Header({ logo }) {
const Header = (props: HeaderOwnProps) => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div
            className={classnames('header__logo', {
              active: props.logo === false,
            })}>
            <img src={newlogo} alt="logo" />
          </div>
        </Link>
        <ul className="header__list mobile">
          <li className="header__circle">
            <Link to={`/#форум`}>О ФОРУМЕ</Link>
          </li>
          <li className="header__circle">
            <Link to={`/#программа`}>ПРОГРАММА</Link>
          </li>
          <li className="header__circle">
            <Link to={`/#спикеры`}>СПИКЕРЫ</Link>
          </li>
          <li className="header__circle">
            <Link to={`/#трансляция`}>ПРЯМАЯ ТРАНСЛЯЦИЯ</Link>
          </li>
          <li className="header__circle">
            <Link to={`/#викторина`}>QR-ВИКТОРИНА</Link>
          </li>
        </ul>
        <Link to="/вход">
          <div className="header__icon">
            {props.logo ? (
              <img src={icon1} alt="Вход в личный кабинет" />
            ) : (
              <img src={icon2} alt="Вход в личный кабинет" />
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
