import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import logos1 from '../assets/img/organizators/logos1.png';
import logos2 from '../assets/img/organizators/logos2.png';
import logos3 from '../assets/img/organizators/logos3.png';
import logos4 from '../assets/img/organizators/logos4.png';
import logos5 from '../assets/img/organizators/logos5.png';
import logos6 from '../assets/img/organizators/logos6.jpg';
import logos7 from '../assets/img/organizators/logos7.png';
import cobweb from '../assets/img/cobweb.png';
import cloud1 from '../assets/img/cloud1.png';
import cloud2 from '../assets/img/cloud2.png';
import imgFooter from '../assets/img/footer10.png';
import inst from '../assets/img/inst.png';
import vkFooter from '../assets/img/vkfooter.png';
import awesome from '../assets/img/awesome.png';

import speaker4 from '../assets/img/speakers/speaker4.jpg';
import speaker5 from '../assets/img/speakers/speaker5.jpg';
import speaker6 from '../assets/img/speakers/speaker6.jpg';
import speaker7 from '../assets/img/speakers/speaker7.jpg';
import speaker8 from '../assets/img/speakers/speaker8.jpg';
import speaker9 from '../assets/img/speakers/speaker9.jpg';
import speaker10 from '../assets/img/speakers/speaker10.jpg';
import speaker11 from '../assets/img/speakers/speaker11.jpg';
import speaker12 from '../assets/img/speakers/speaker12.jpg';
import speaker13 from '../assets/img/speakers/speaker13.jpg';
import speaker14 from '../assets/img/speakers/speaker14.jpg';
import speaker15 from '../assets/img/speakers/speaker15.jpg';
import speaker16 from '../assets/img/speakers/speaker16.jpg';
import speaker17 from '../assets/img/speakers/speaker17.jpg';
import speaker18 from '../assets/img/speakers/speaker18.jpg';
import speaker19 from '../assets/img/speakers/speaker19.jpg';
import speaker20 from '../assets/img/speakers/speaker20.jpg';
import speaker21 from '../assets/img/speakers/speaker21.jpg';
import speaker22 from '../assets/img/speakers/speaker22.jpg';
import speaker23 from '../assets/img/speakers/speaker23.jpg';
import speaker24 from '../assets/img/speakers/speaker24.jpg';
import speaker25 from '../assets/img/speakers/speaker25.jpg';
import prize1 from '../assets/img/prize1.png';
import prize2 from '../assets/img/prize2.png';
import prize3 from '../assets/img/prize3.png';
import prize4 from '../assets/img/prize4.png';

function Home() {
  return (
    <div className="content">
      <div className="welcome">
        <div className="wrapper">
          <Header logo={true} />
          <h1 className="h1">
            Доброе
            <br />
            мероприятие объединяет{' '}
          </h1>
          <h2 className="h2">даже онлайн</h2>
        </div>
        <div className="welcome__footer">
          <img src={awesome} alt="footer" />
        </div>
      </div>
      <div className="about" id={`#форум`}>
        <div className="wrapper">
          <div className="about__sections">
            <div className="about__first">
              <div className="about__maxheight">
                <h1 className="h1 h1_orange">25-26</h1>
                <h2 className="h2 h2_green h2_bottom">ноября</h2>
              </div>
              <p>
                В Санкт - Петербурге, в рамках молодежного форума “Доброфорум 9.0”, вновь соберутся
                ведущие эксперты в сфере благотворительности и добровольчества, а также социально
                ответственная молодежь. Площадка форума всегда предоставляла своим участникам
                полезную образовательную, досуговую и полезную программы. Именно здесь всегда
                находятся решения острых и значимых вопросов добровольческого сообщества России.
              </p>
              <br></br>
              <p>
                “Доброфорум 9.0” - это место притяжения людей, окруженных историями, которые
                вдохновляют, помогают осознать свое настоящее и поверить в будущее, открывают для
                нас мир глазами других людей. Это место силы не только для успешных волонтеров и
                лидеров мнений, но и для тех людей, кто уже сегодня готов начать помогать, но не
                знает с чего начать и где найти возможности для реализации своих потребностей,
                желаний и идей.
              </p>
              <br></br>
              <p>
                Впервые форум пройдет в онлайн-формате, но от этого станет лишь более запоминающимся
                и полезным. Следуя современным трендам, Организационный комитет форума подготовил
                для каждого участника QR-викторину, лишь 700 счастливчиков которой получат памятные
                брендированные подарки. Стань частью значимого волонтерского события Северной
                столицы и успей зарегистрироваться!
              </p>
              <div className="about__button">
                <NavLink to="/вход">
                  <button className="button button_green button_medium">Регистрация</button>
                </NavLink>
              </div>
            </div>
            <div className="about__second">
              <div className="about__maxheight">
                <h3 className="h3">Организаторы</h3>
                <h2 className="h2 h2_small h2_green">онлайн форума</h2>
              </div>
              <div className="about__logos">
                <img src={logos1} alt="Логотип" width="244px" height="135px" />
                <img src={logos2} alt="Логотип" width="196px" height="132px" />
                <img src={logos6} alt="Логотип" width="200px" height="164px" />
                <img src={logos3} alt="Логотип" width="262px" height="133px" />
                <img src={logos4} alt="Логотип" width="310px" height="125px" />
                <img src={logos5} alt="Логотип" width="220px" height="126px" />
                <img src={logos7} alt="Логотип" width="160px" height="137px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="programm">
        <div className="programm__title">
          <h1 className="h1 h1_green h1_max">Программа</h1>
          <h2 className="h2 h2_violet h2_small h2_bot h2_degree">онлайн форума</h2>
          <div>
            <img src={cobweb} alt="img" />
          </div>
        </div>
      </div>
      <div className="info" id={`#программа`}>
        <div className="info__firstday">
          <h1 className="h1 h1_max">25</h1>
          <h2 className="h2 h2_orange h2_small h2_bottom h2_degree">ноября</h2>
          <div>
            <h4 className="h4">10:00-11:30</h4>
            <p>
              Открытие форума
              <br />
              Сторителлинг "Я/Мы вместе"
            </p>
          </div>
          <div>
            <h4 className="h4">11.30-11.35</h4>
            <p>Интерактивная программа. Событийное волонтерство</p>
          </div>
          <div>
            <h4 className="h4">11.35-13.05</h4>
            <p>
              Паблик-ток
              <br />
              "Место силы: Как создать инфраструктуру для поддержки и развития добровольчества?
              Взгляд из настоящего в будущего"
            </p>
          </div>
          <div>
            <h4 className="h4">13.05-13.10</h4>
            <p>Интерактивная программа. Социальное волонтерство</p>
          </div>
          <div>
            <h4 className="h4">13.10-14.40</h4>
            <p>
              Сессия
              <br />
              "Инклюзивные тренды: истории создания равных возможностей"
            </p>
          </div>
          <div>
            <h4 className="h4">14.40-14.45</h4>
            <p>Интерактивная программа. Серебряные волонтеры</p>
          </div>
          <div>
            <h4 className="h4">14.45-16.15</h4>
            <p>
              Сессия
              <br />
              "Экологическое просвещение. Как сделать свою повседневную жизнь более экологичной?"
            </p>
          </div>
          <div>
            <h4 className="h4">16.15-16.20</h4>
            <p>Интерактивная программа. Медицинское волонтерство</p>
          </div>
          <div>
            <h4 className="h4">16.20-17.00</h4>
            <p>
              Мастер-класс
              <br />
              "Карантин: как оставаться эффективным и не падать духом"
            </p>
          </div>
          <div>
            <h4 className="h4">17.00-17.05</h4>
            <p>Интерактивная программа. Инклюзивное волонтерство</p>
          </div>
          <div>
            <h4 className="h4">17.05-17.45</h4>
            <p>
              Мастер-класс
              <br /> "Точка роста: как создать персональный бренд с 0?"
            </p>
          </div>
          <div>
            <h4 className="h4">17.45-17.50</h4>
            <p>Интерактивная программа. Студенческое волонтерство</p>
          </div>
          <div>
            <h4 className="h4">17.50-19.20</h4>
            <p>
              Паблик-ток
              <br /> "Удивительные истории добрых людей"
            </p>
          </div>
          <div>
            <h4 className="h4">19.25-19.30</h4>
            <p>Интерактивная программа. Экологическое волонтерство</p>
          </div>
          <div>
            <h4 className="h4">19.30-21.00</h4>
            <p>
              Культурная программа.
              <br /> Спектакль в формате сторителлинга "Люди добрые"
            </p>
          </div>
        </div>
        <div className="info__secondday">
          <h1 className="h1 h1_max">26</h1>
          <h2 className="h2 h2_orange h2_small h2_bottom h2_degree">ноября</h2>
          <div>
            <h4 className="h4">10.00-10.40</h4>
            <p>
              Мастер-класс
              <br /> "Сторителлинг для презентации твоих идей"
            </p>
          </div>
          <div>
            <h4 className="h4">10.40-10.45</h4>
            <p>Интерактивная программа. Юные волонтеры</p>
          </div>
          <div>
            <h4 className="h4">10.45-11.25</h4>
            <p>
              Мастер-класс
              <br /> "Умное планирование: волонтерство, работа и саморазвитие"
            </p>
          </div>
          <div>
            <h4 className="h4">11.25-11.30</h4>
            <p>Интерактивная программа. Патриотическое волонтерство</p>
          </div>
          <div>
            <h4 className="h4">11.30-12.10</h4>
            <p>
              Мастер-класс
              <br /> "Команда: значение, мотивация и работа на удаленке"
            </p>
          </div>
          <div>
            <h4 className="h4">12.10-12.15</h4>
            <p>Интерактивная программа. Культурное волонтерство</p>
          </div>
          <div>
            <h4 className="h4">12.15-13.45</h4>
            <p>
              Сессия
              <br /> "Бизнес и НКО: истории создания успешных социальных коллабораций"
            </p>
          </div>
          <div>
            <h4 className="h4">13.45-13.50</h4>
            <p>Интерактивная программа. Медиа-волонтерство</p>
          </div>
          <div>
            <h4 className="h4">13.50-15.20</h4>
            <p>
              Паблик-ток
              <br /> "Навыки будущего: в каких сферах будут востребованы волонтерские компетенции"
            </p>
          </div>
          <div>
            <h4 className="h4">15.20-15.25</h4>
            <p>Интерактивная программа. Волонтерство в ЧС</p>
          </div>
          <div>
            <h4 className="h4">15.25-16.55</h4>
            <p>
              Паблик-ток
              <br />
              "Все гениальное просто: истории создания успешных благотворительных проектов"
            </p>
          </div>
          <div>
            <h4 className="h4">16.55-17.00</h4>
            <p>Интерактивная программа. #МыВместе</p>
          </div>
          <div>
            <h4 className="h4">17.00</h4>
            <p>
              Концертная программа
              <br />
              - Церемония вручения правительственной награды за вклад в развитие добровольчества
              (волонтерства)
              <br />
              - Церемония награждения победителей премии “ФОРМА ДОБРА. Топ-25 Самые добрые люди
              Петербурга”
              <br />- Выступления известных исполнителей: NATAN и Клава Кока
            </p>
          </div>
        </div>
      </div>
      <div className="speakers">
        <div className="wrapper">
          <h1 className="h1 h1_orange h1_max" id={`#спикеры`}>
            Спикеры
          </h1>
          <h2 className="h2 h2_green h2_bot">онлайн форума</h2>
          <div className="speakers__who">
            <div className="speakers__block">
              <img src={speaker4} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Марк Богатырёв</h5>
                <p>Российский актёр театра и кино, телеведущий</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker5} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Анна Цуканова-Котт</h5>
                <p>Российская актриса театра и кино, телеведущая</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker6} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Дмитрий Ендальцев</h5>
                <p>Российский актер театра и кино</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker7} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Ёлка</h5>
                <p>Певица</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker8} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Васильева Прасковья</h5>
                <p>Руководитель ГБУ ЛО "Ресурсный добровольческий центр"</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker9} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Моисеева Инга</h5>
                <p>Исполнительный директор Ди-Групп Сошиал</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker10} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Тумашик Полина</h5>
                <p>
                  Президент фонда "Доброделы Петербурга", основатель Всероссийского проекта
                  "ДоброПочта", блогер
                </p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker11} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Костин Андрей</h5>
                <p>Генеральный директор ООО "Сэнди"</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker12} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Легкая Александра</h5>
                <p>Организатор движения фудшеринг и бесплатных обедов «Еда без границ»</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker13} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Иевков Сергей</h5>
                <p>Врач уличной медицины, руководитель проекта "Благотворительная Больница"</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker14} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Серикова Евгения</h5>
                <p>Руководитель специальных проектов</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker15} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Радилова Олеся</h5>
                <p>
                  Независимый консультант по фандрайзингу и корпоративной социальной ответственности
                </p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker16} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Тоноян Татевик </h5>
                <p>
                  и.о. Руководителя отдела фандрайзинга благотворительного фонда "Дети-бабочки"{' '}
                </p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker17} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Агейчев Олег</h5>
                <p>Режиссер, креативный директор</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker18} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Корначева Светлана </h5>
                <p>Директор по коммуникациям БФ "КАФ"</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker25} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Екатерина IOWA </h5>
                <p>Певица</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker24} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Мовшович Анатолий </h5>
                <p>Социальный предприниматель, основатель и руководитель проекта "Мир на ощупь".</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker23} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Катаева Валерия </h5>
                <p>
                  Руководитель Центра инклюзивных проектов и социальной интеграции детей с особыми
                  потребностями "Какая разница!"
                </p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker22} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Александр Широбоков </h5>
                <p>Основатель "Переработкинской", эксперт в сфере обращения с отходами</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker21} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Глаголев Евгений </h5>
                <p>Руководитель социальных проектов фонда "Клуб добряков"</p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker20} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>Биккулов Ильшат </h5>
                <p>
                  Руководитель ресурсного центра поддержки добровольчества Республики Башкортостан
                </p>
              </div>
            </div>

            <div className="speakers__block">
              <img src={speaker19} alt="" />
              <div className="speakers__mask"></div>
              <div className="speakers__hover">
                <h5>
                  Ирина <br></br>Шанаева{' '}
                </h5>
                <p>Руководитель отдела по устойчивому маркетингу РедМе</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="broadcast" id={`#трансляция`}>
        <div className="broadcast__info">
          <div className="wrapper">
            <h1 className="h1 h1_max h1_violet">ПРЯМАЯ ТРАНСЛЯЦИЯ - 1 ДЕНЬ</h1>
            <h2 className="h2 h2_white h2_degree2">Вдохновляйся. Совершенствуйся.</h2>
          </div>
          <div className="broadcast__video">
            <iframe
              title="day1"
              src="//vk.com/video_ext.php?oid=-130735693&id=456239307&hash=b25e4f56ec82d968&hd=1"
              width="820"
              height="579"
              frameBorder="0"></iframe>
          </div>
          <div className="wrapper">
            <h1 className="h1 h1_max h1_violet">
              СПЕКТАКЛЬ В ФОРМАТЕ<br></br> СТОРИТЕЛЛИНГА
            </h1>
            <h2 className="h2 h2_white h2_degree2">Люди добрые</h2>
          </div>
          <div className="broadcast__video">
            <iframe
              title="spectacle"
              src="//vk.com/video_ext.php?oid=-130735693&id=456239309&hash=31f8f2db591705ae"
              width="820"
              height="579"
              frameBorder="0"></iframe>
          </div>
          <div className="wrapper">
            <h1 className="h1 h1_max h1_green h1_nowrap">ПРЯМАЯ ТРАНСЛЯЦИЯ - 2 ДЕНЬ</h1>
            <h2 className="h2 h2_white h2_top">Начни с себя менять свой город</h2>
          </div>
          <div className="broadcast__video broadcast__video_green">
            <iframe
              title="day2"
              src="//vk.com/video_ext.php?oid=-130735693&id=456239308&hash=c3a73d6e8af3c19d"
              width="820"
              height="579"
              frameBorder="0"></iframe>
          </div>
        </div>
      </div>
      <div className="quiz__text">
        <p>
          Чтобы получить памятные подарки от команды организаторов “Доброфорум 9.0”, тебе нужно
          будет принять участие в QR-викторине.
        </p>

        <p>
          Все очень просто: во время трансляции образовательных треков на твоем экране будет
          появляться QR-код, который нужно отсканировать своим мобильным устройством. Ты окажешься
          на страничке Личного кабинета и увидишь разные, но интересные по содержанию задачи. Дай
          свои ответы, предложения по их решению и получи баллы, которые по завершении форума ты
          сможешь обменять на брендированную продукцию.
        </p>

        <p>
          Но помни, что для участия в данном интерактиве тебе, прежде всего, необходимо
          зарегистрироваться и авторизоваться на сайте{' '}
        </p>
      </div>
      <div className="quiz__prize">
        <div className="quiz__goods">
          <div className="quiz__absolute">
            <h6>16</h6>
            <span>Баллов</span>
          </div>
          <div className="quiz__imgs">
            <img src={prize1} alt="prize" />
          </div>
          <p>ПОДУШКА ДЛЯ ПУТЕШЕСТВИЙ</p>
        </div>
        <div className="quiz__goods">
          <div className="quiz__absolute">
            <h6>8</h6>
            <span>Баллов</span>
          </div>
          <div className="quiz__imgs">
            <img src={prize2} alt="prize" />
          </div>
          <p>СУМКА - ШОППЕР</p>
        </div>
        <div className="quiz__goods">
          <div className="quiz__absolute">
            <h6>5</h6>
            <span>Баллов</span>
          </div>
          <div className="quiz__imgs">
            <img src={prize3} alt="prize" />
          </div>
          <p>НОСКИ </p>
        </div>
        <div className="quiz__goods">
          <div className="quiz__absolute">
            <h6>11</h6>
            <span>Баллов</span>
          </div>
          <div className="quiz__imgs">
            <img src={prize4} alt="prize" />
          </div>
          <p>ЧЕХОЛ НА ЧЕМОДАН</p>
        </div>
      </div>

      <div className="footer">
        <div className="wrapper">
          <div className="footer__clouds">
            <img src={cloud1} alt="cloud" />
            <img src={cloud2} alt="cloud" />
          </div>
          <h1 className="h1">ПЕТЕРБУРГ - СТОЛИЦА </h1>
        </div>
        <div className="footer__img">
          <img src={imgFooter} alt="footer" />
        </div>
        <div className="footer__social">
          <div className="footer__background"></div>
          <div className="wrapper footer__icons">
            <a
              href="https://www.instagram.com/dobroforumspb/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={inst} alt="inst" />
            </a>
            <a href="https://vk.com/dobropeteburg" target="_blank" rel="noopener noreferrer">
              <img src={vkFooter} alt="vk" />
            </a>
            <span>© Все права защищены</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
