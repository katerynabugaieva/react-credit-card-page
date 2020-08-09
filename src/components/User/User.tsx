import React from 'react';
import './User.scss';
import { IUserProps } from '../../interfaces';

const User = (props: IUserProps) => {
  return (
    <div className='user'>
      <img src={props.imagePath} className='avatar' alt='' />
      <div className='description'>
        <h3 className='username'>{props.name}</h3>
        <p className='extra-info'>{props.position}</p>
        <p className='extra-info'>{props.cardNumber}</p>
      </div>
    </div>
  );
};

export default User;
