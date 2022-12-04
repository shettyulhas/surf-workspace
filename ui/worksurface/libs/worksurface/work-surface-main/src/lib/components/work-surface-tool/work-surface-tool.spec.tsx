import { render } from '@testing-library/react';

import WorkSurfaceTool from './work-surface-tool';

describe('WorkSurfaceTool', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkSurfaceTool />);
    expect(baseElement).toBeTruthy();
  });
});
