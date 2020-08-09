import React from 'react';
import './App.scss';
import User from './components/User/User';
import ProgressBar from './components/ProgressBar/ProgressBar';

function App() {
  return (
    <div className='App'>
      <div className='page'>
        <div className='back-to'>
          <label>
            <button> &lt;</button> Back to credit cards
          </label>
        </div>

        <div className='container'>
          <User
            name='Philipp Rieger'
            imagePath='../assets/avatar.svg'
            cardNumber='****1234'
          ></User>

          <div className='edit'>
            <button className='edit-button'>
              <label className='icon'>edit</label>Edit
            </button>
          </div>

          <div className='left-column'>
            <img src='' alt='card will be there' />
            <ProgressBar limit='1200' usedLimit='800' spentMoney='5759' />
          </div>

          <div className='right-column'>
            <h3>Credit card details</h3>

            <div className='card-month-limit'>
              <label>infos</label>
            </div>

            <h3>expenses</h3>

            <div className='card-expenses'>
              <div className='expens-item'>
                <div>
                  <User
                    name='Philipp Rieger'
                    imagePath='../assets/avatar.svg'
                    position='developer'
                  ></User>
                  <label>sum</label>
                  <label>date</label>
                  <label>Exported/invoice missing</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
