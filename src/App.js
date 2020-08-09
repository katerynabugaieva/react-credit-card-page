import React from 'react';
import './App.scss';
import User from './components/User/User';
import ProgressBar from './components/ProgressBar/ProgressBar';
import CreditCardDetails from './components/CreditCardDetails/CreditCardDetails';
import Expences from './components/Expences/Expences';

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
            <img
              alt='card'
              src='../assets/card.png'
              className='credit-card-img'
            />
            <ProgressBar limit='1200' usedLimit='800' spentMoney='5759' />
          </div>

          <div className='right-column'>
            <h3>Credit card details</h3>

            <div className='card-item'>
              <CreditCardDetails />
            </div>

            <h3>Expenses</h3>

            <div className='card-expenses'>
              <div className='card-item'>
                <div className='expens-item'>
                  <Expences />
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
