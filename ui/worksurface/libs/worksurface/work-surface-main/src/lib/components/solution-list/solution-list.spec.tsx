import { render } from '@testing-library/react';

import SolutionList from './solution-list';

describe('SolutionList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SolutionList />);
    expect(baseElement).toBeTruthy();
  });
});
