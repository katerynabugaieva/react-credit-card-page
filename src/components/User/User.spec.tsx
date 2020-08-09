import { render } from '@testing-library/react';
import * as React from 'react';
import User from './User';

const testData = {
  name: 'John Done',
  imagePath: '../assets/avatar.svg',
  cardNumber: '****1234',
  position: 'developer',
};

describe('User', () => {
  let user: any;
  beforeAll(() => {
    user = render(
      <User
        name={testData.name}
        imagePath={testData.imagePath}
        cardNumber={testData.cardNumber}
        position={testData.position}
      />
    );
  });

  it('should render', () => {
    expect(user).toBeTruthy();
  });

  it('should contain name', () => {
    const name = user.findByText('John Done');
    expect(name).toBeTruthy();
  });

  it('should contain position', () => {
    const position = user.findByText('developer');
    expect(position).toBeTruthy();
  });

  it('should contain cardnumber', () => {
    const cardNumber = user.findByText('****1234');
    expect(cardNumber).toBeTruthy();
  });

  it('should contain avatar', () => {
    expect(user.findByRole('img')).toBeTruthy();
  });
});
