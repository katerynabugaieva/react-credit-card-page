import React from 'react';
import './App.scss';

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
          <div className='user-card'>
            <img className='avatar' alt='avatar' src='../assets/avatar.svg' />
            <div className='user-info'>
              <label className='name'>Philipp Rieger</label>
              <label className='credit-card-number'>****12345</label>
            </div>
          </div>

          <div className='edit'>
            <button className='edit-button'>
              <label className='icon'>edit</label>Edit
            </button>
          </div>

          <div className='left-column'>
            <img src='' alt='card will be there' />
            <div className='money-month-slider'>
              <label className='terms'>This months</label>
              <label className='limit'>800.00$/1,200.00$</label>

              <div className='progress-bar'>
                <span></span>
              </div>
            </div>
            <div className='money-year-slider'>
              <label className='terms'>Spent this year</label>
              <label className='limit'>5,759.00$</label>
              <div className='progress-bar'>
                <span></span>
              </div>
            </div>
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
                  <img className='avatar' src='../assets/avatar.svg' />
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
