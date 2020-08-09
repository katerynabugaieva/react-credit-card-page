import * as React from 'react';
import ExpenseItem from './ExpenceItem';

export default () => (
  <React.Fragment>
    <ExpenseItem sum={12.30} date='16th Jan, 2019' status='Invoice missing' />
    <ExpenseItem sum={12.30} date='16th Dec, 2018' status='Exported' />
    <ExpenseItem sum={12.30} date='16th Nov, 2018' status='Exported' />
  </React.Fragment>
);
