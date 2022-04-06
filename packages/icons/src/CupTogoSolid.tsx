import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 64h-16l-23.12-46.25C387.4 6.875 376.4 0 364.3 0H83.8C71.62 0 60.63 6.875 55.13 17.75L32 64H16C7.125 64 0 71.12 0 80v32c0 8.9 7.125 16 16 16h416c8.9 0 16-7.1 16-16V80c0-8.88-7.1-16-16-16zM106.8 512h234.5c16.62 0 30.5-12.75 31.88-29.38L400 160H48l26.88 322.6c1.37 16.6 15.24 29.4 31.92 29.4zm221-256-13.25 160h-181L120.2 256h207.6z" />
  </svg>
);

const SvgCupTogoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCupTogoSolid;
