import { render } from '@testing-library/react';

import WorksurfaceWorkSurfaceMain from './worksurface-work-surface-main';

describe('WorksurfaceWorkSurfaceMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorksurfaceWorkSurfaceMain />);
    expect(baseElement).toBeTruthy();
  });
});
