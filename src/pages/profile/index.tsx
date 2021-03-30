import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../redux/actions';
import Header from '../../components/Header';
import arrow from '../../assets/img/votePage/arrow.png';
import vk from '../../assets/img/votePage/vk2.png';

import korneva from '../../assets/img/votePage/korneva.png';
import vasilchenko from '../../assets/img/votePage/vasilchenko.png';
import tretyakova from '../../assets/img/votePage/tretyakova.png';
import classnames from 'classnames';
import Person from './Person';
import { AppStateType } from '../../redux/reducers';

export type YoungSoulPersonsType = {
  id: string;
  name: string;
  about: string;
  reason: string;
  img: JSX.Element;
};
const testOnh: YoungSoulPersonsType = {
  id: '0',
  name: 'Корнева Зинаида',
  about: 'Инициатива ветерана Зинаиды Корневой',
  reason:
    `за активную поддержку семей врачей во время пандемии и организацию
    процесса взаимпопомощии приема пожертвований, в результате которого
    на 31 октября было распределено 4 560 000 руб. между 152 семьями врачей`,
  img: <img src={korneva} alt="korneva" />,
}
console.log(testOnh)
const youngSoulPersons: YoungSoulPersonsType[]  = [
  {
    id: '0',
    name: 'Корнева Зинаида',
    about: 'Инициатива ветерана Зинаиды Корневой',
    reason:
      `за активную поддержку семей врачей во время пандемии и организацию
      процесса взаимпопомощии приема пожертвований, в результате которого
      на 31 октября было распределено 4 560 000 руб. между 152 семьями врачей`,
    img: <img src={korneva} alt="korneva" />,
  },
  {
    id: '1',
    name: 'Васильченко Ольга',
    about: 'Волонтерский Центр "Серебряные волонтеры Санкт-Петербурга"',
    reason:
      `за развитие гражданско-патриотического направления ВЦ 
      "Серебряные волонтеры Санкт-Петербурга" и организации адресной
      помощи по поддержке ветеранов и пожилых граждан`,
    img: <img src={vasilchenko} alt="vasilchenko" />,
  },
  {
    id: '2',
    name: 'Третьякова Людмила',
    about: 'АНО “Серебряный Возраст Санкт-Петербург”',
    reason:
      `за оказание адресной помощи гражданам пожилого возраста, нуждающимся
       в уходе и развитию социального направления ВЦ
      "Серебряные волонтеры Санкт-Петербурга"`,
    img: <img src={tretyakova} alt="tretyakova" />,
  },
];

const Profile: React.FC = () => {
  const dispatch = useDispatch();
 
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const profile = useSelector((state: AppStateType) => state.auth.profile);

  React.useEffect(() => {
    dispatch(authActions.loadUserData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const setLogout = () => {
  //   dispatch(authActions.setLogout());
  // };

  const [activeId, setActiveId] = React.useState<number>();

  const handleClick = () => (e: React.MouseEvent<HTMLElement>) => {
    // eslint-disable-next-line
    const target = e.target as any;
 
    const personId: number = parseInt(target.id);
    setActiveId(personId);
    
 
    [...target.closest('.section__nominee').querySelectorAll('h5')].forEach(el => el.innerHTML = 'Оставить свой голос');
  
    target
        .nextElementSibling
        .querySelector('h5')
        .innerHTML = 'Ваш голос учтен';
      
  };

  if (!isAuth) {
    return <Redirect to="/вход" />;
  }
  if(profile === null) {
    return <Redirect to="/вход" />;
  }
  return (
    <div className="content">
      <div className="profile">
        <div className="wrapper">
          <Header logo={false} />
          <div className="profile__main">
            <div className="profile__fio">
              <p>{profile.fullName}</p>
            </div>
            <div className="profile__ball">
              <p>баллов: {profile.ball}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="vote">
        <div className="wrapper">
          <div className="vote__content">
            <h1>Народное голосование </h1>
            <h2>12 ноября - 23 ноября</h2>
            <img className="vote__arrow" src={arrow} alt="arrow" />
            <h1>Церемония вручения премии</h1>
            <h2>
              26 ноября в 17:00<br></br> в прямом эфире
            </h2>
            <div className="vote__button" id="efir">
              <button disabled>Смотреть эфир</button>
            </div>
            <h1>Номинации и номинанты </h1>
          </div>

          {!profile.vk && !profile.cloneVk && (
            <div className="vote__oauthmain">
              <a href="https://oauth.vk.com/authorize?client_id=7629856&display=page&redirect_uri=https://xn--90afzgbamc1ah.xn--p1ai/vote/vk.php&response_type=code">
                <h3>Для голосования Вам нужно авторизоваться с помощью VK</h3>
                <img src={vk} alt="vk" />
              </a>
            </div>
          )}
        </div>

        {profile.vk && (
          <div className="section">
            <h1>"Молоды душой"</h1>
            <h3>
              Истории добровольцев (волонтеров) 50+,
              реализующих социальные проекты и участвующие в
              благотворительности
            </h3>
            <div className="section__nominee">
              {youngSoulPersons.map((item, index) => (
                <Person
                  key={`${item.name}_${index}`}
                  content={item}
                  onClick={handleClick()}
                  classNameActive={classnames('section__photo', {
                    active: parseInt(item.id) === activeId,
                  })}
                />
              ))}
            </div>
          </div>
        )}

        {profile.cloneVk &&
         <div className="vote__double">
           {profile.cloneVk}
         </div>}
      </div>
    </div>
  );
};

export default Profile;
