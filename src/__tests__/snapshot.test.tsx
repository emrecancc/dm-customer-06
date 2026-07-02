import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockReturnValue(new Date('2024-01-14').getTime());
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('renders correctly', () => {
    const { asFragment } = render(<Dashboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});