import { render } from '@testing-library/react';
import * as React from 'react';
import ProgressBar from './ProgressBar';

const testData = {
  limit: 100,
  usedLimit: 50,
  spentMoney: 1000,
};

describe('ProgressBar', () => {
  let progressBar: any;
  beforeAll(() => {
    progressBar = render(
      <ProgressBar
        limit={testData.limit}
        usedLimit={testData.usedLimit}
        spentMoney={testData.spentMoney}
      />
    );
  });

  it('should render', () => {
    expect(progressBar).toBeTruthy();
  });

  it('should render', () => {
    expect(progressBar).toBeTruthy();
  });

  describe('labels', () => {
    it('should contain thisMonth label', () => {
      const thisMonth = progressBar.findByText('This month');
      expect(thisMonth).toBeTruthy();
    });

    it('should render correct limit', () => {
      const limit = progressBar.findByText('50$/ 100$');
      expect(limit).toBeTruthy();
    });

    it('should contain Spent this year label', () => {
      const thisYear = progressBar.findByText('Spent this year');
      expect(thisYear).toBeTruthy();
    });

    it('should render correct year limit', () => {
      const yearLimit = progressBar.findByText('1000');
      expect(yearLimit).toBeTruthy();
    });
  });
});
