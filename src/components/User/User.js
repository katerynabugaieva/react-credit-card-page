import * as React from 'react';
import './User.scss';

class User extends React.Component {
  render() {
    return (
      <div className='user-card'>
        <img className='avatar' alt='avatar' src='../assets/avatar.svg' />
        <div className='user-info'>
          <label className='name'>Philipp Rieger</label>
          <label className='extra-info'>****12345</label>
          <label className='extra-info'>position</label>
        </div>
      </div>
    );
  }
}
export default User;
