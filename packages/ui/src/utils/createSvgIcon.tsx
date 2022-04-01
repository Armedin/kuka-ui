import * as React from 'react';
import SvgIcon from '../SvgIcon';

export default function createSvgIcon(path: React.ReactNode, viewBox: string) {
  const Component = (inProps: any, ref: any) => (
    <SvgIcon ref={ref} viewBox={viewBox} {...inProps}>
      {path}
    </SvgIcon>
  );

  return React.memo(React.forwardRef(Component));
}
