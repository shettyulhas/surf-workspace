import { render } from '@testing-library/react';

import WorkSurfaceMap from './work-surface-map';

describe('WorkSurfaceMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkSurfaceMap />);
    expect(baseElement).toBeTruthy();
  });
});
