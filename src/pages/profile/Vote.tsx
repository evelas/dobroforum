import React from 'react';
import Header from '../../components/Header';
import arrow from '../../assets/img/votePage/arrow.png';
import vk from '../../assets/img/votePage/vk2.png';

import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reducers';

const Vote: React.FC = () => {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

  if (!isAuth) {
    return <Redirect to="/вход" />;
  }
  return (
    <div className="content">
      <div className="vote">
        <div className="wrapper">
          <Header logo={true} />
          <div className="vote__content">
            <h1>НАРОДНОЕ ГОЛОСОВАНИЕ </h1>
            <h2>12 ноября - 23 ноября</h2>
            <img className="vote__arrow" src={arrow} alt="arrow" />
            <h1>ЦЕРЕМОНИЯ ВРУЧЕНИЯ ПРЕМИИ</h1>
            <h2>
              26 ноября в 17:00<br></br> в прямом эфире
            </h2>
            <div className="vote__button" id="efir">
              <button disabled>Смотреть эфир</button>
            </div>
            <h1>НОМИНАЦИИ И НОМИНАНТЫ </h1>
          </div>

          <div className="vote__oauthmain">
            <a
              href="https://oauth.vk.com/authorize?client_id=7629856&display=page&redirect_uri=https://xn--90afzgbamc1ah.xn--p1ai/vote/vk.php&response_type=code"
              target="_blank"
              rel="noopener noreferrer"
              id="main">
              <h3>Для голосования Вам нужно авторизоваться с помощью VK</h3>
              <img src={vk} alt="vk" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
