import * as React from 'react';
import './ProgressBar.scss';
import { IProgressBarProps } from '../../interfaces';

const ProgressBar = (props: IProgressBarProps) => {
  const barWidth = (props.usedLimit / props.limit) * 100 + '%';
  return (
    <div>
      <div className='money-month-slider'>
        <label className='terms'>This months</label>
        <label className='limit dollars'>
          {props.usedLimit}$/{props.limit}
        </label>

        <div className='progress-bar'>
          <span style={{ width: barWidth }}></span>
        </div>
      </div>
      <div className='money-year-slider'>
        <label className='terms'>Spent this year</label>
        <label className='limit dollars'>{props.spentMoney}</label>
        <div className='progress-bar'>
          <span style={{ width: '85%' }}></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
