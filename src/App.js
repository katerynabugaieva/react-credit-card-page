import React from 'react';
import './App.scss';
import CreditCardDetails from './components/CreditCardDetails/CreditCardDetails';
import Expences from './components/Expences/Expences';
import ProgressBar from './components/ProgressBar/ProgressBar';
import User from './components/User/User';

function App() {
  return (
    <div className='App'>
      <div className='back-to'>
        <button className='back-to-button'> &lt;</button> Back to credit cards
      </div>

      <div className='container'>
        <div className='user-card'>
          <h3>
            <User
              name='Philipp Rieger'
              imagePath='../assets/avatar.svg'
              cardNumber='****1234'
            ></User>
          </h3>
        </div>

        <div className='edit'>
          <button className='edit-button'>
            <label className='icon'>edit</label>Edit
          </button>
        </div>

        <div className='left-column'>
          <img
            alt='card'
            src='../assets/card.png'
            className='credit-card-img'
          />
          <div className='spent-progress-bars'>
            <ProgressBar limit='1200' usedLimit='800' spentMoney='5759' />
          </div>
        </div>

        <div className='right-column'>
          <div className='credit-info-card'>
            <h4> Credit card details</h4>

            <div className='card-item'>
              <CreditCardDetails />
            </div>
          </div>

          <div className='expenses-card'>
            <h4>Expenses</h4>

            <div className='card-item'>
              <div className='expens-item'>
                <Expences />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
