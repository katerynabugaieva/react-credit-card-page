import { render } from '@testing-library/react';
import * as React from 'react';
import CreditCardDetails from './CreditCardDetails';

describe('CreditCardDetails', () => {
  let creditCardDetails;
  beforeAll(() => {
    creditCardDetails = render(<CreditCardDetails />);
  });

  it('should render', () => {
    expect(creditCardDetails).toBeTruthy();
  });
});
