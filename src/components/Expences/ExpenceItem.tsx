import * as React from 'react';
import User from '../User/User';
import './ExpencesItem.scss';
import { IExpense } from '../../interfaces';

export default (props: IExpense) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>
              <User
                name='Philipp Rieger'
                imagePath='../assets/avatar.svg'
                position='Accounting for Pros (Prefessional development)'
              />
            </th>
            <td>
              <div>
                <p className='sum dollars'>{props.sum}</p>
                <p>{props.date}</p>
                <p>
                  {props.status === 'Exported' && (
                    <label className='status-positiv'>{props.status}</label>
                  )}
                  {props.status === 'Invoice missing' && (
                    <label className='status-negativ'>{props.status}</label>
                  )}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
