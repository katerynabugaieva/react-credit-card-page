import * as React from 'react';
import './User.scss';
import { IUserProps } from '../../interfaces';

const User = (props: IUserProps) => {
  return (
    <div className='user-card'>
      <img className='avatar' alt='avatar' src='../assets/avatar.svg' />
      <div className='user-info'>
        <label className='name'>{props.name}</label>
        <label className='extra-info'>{props.cardNumber}</label>
        <label className='extra-info'>{props.position}</label>
      </div>
    </div>
  );
};

export default User;
