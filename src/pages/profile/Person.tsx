import React, { MouseEventHandler } from 'react';
import { YoungSoulPersonsType } from '.';


type PropsType = {
  classNameActive: string;
  onClick: MouseEventHandler;
  content: YoungSoulPersonsType;
}


const Person: React.FC<PropsType> = (props) => { 
  return (
    <div className="section__person">
      <div className={props.classNameActive}>
        {props.content.img}
        <div
          className="section__mask"
          id={props.content.id}
          onClick={props.onClick}>
        </div>
        <div className="section__hover">
          <h5>
            Оставить свой голос
          </h5>
        </div>
      </div>
      <h4>
        {props.content.name}
      </h4>
      <p>
        {props.content.about}
      </p>
      <span>
        {props.content.reason}
      </span>
    </div>
  );
}

export default Person;
