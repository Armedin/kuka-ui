import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m483.4 244.2-131.5 42.9h97.74c-9.874 10.62 3.75-3.125-46.24 46.87l-147.6 49.12h98.24c-74.99 73.12-194.6 70.62-246.8 54.1L41.1 503.18c-9.374 9.374-24.6 9.374-33.98 0s-9.374-24.6 0-33.98L266.62 210c6.249-6.25 6.249-16.37 0-22.62-6.249-6.249-16.37-6.249-22.62 0L65.6 365.58c-6.82-59.48 3.01-148.88 63.5-209.28l85.74-85.68c90.62-90.62 189.8-88.27 252.3-25.78C517.8 95.34 528.9 169.7 483.4 244.2z" />
  </svg>
);

const SvgFeatherSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFeatherSolid;
