import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M31.1 32c9.74 0 16 7.16 16 16v416c0 8.8-6.26 16-16 16-7.94 0-16-7.2-16-16V48c0-8.84 8.06-16 16-16zm128 0c9.7 0 16 7.16 16 16v416c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16V48c0-8.84 8.1-16 16-16zM304 464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.84 7.2-16 16-16s16 7.16 16 16v416z" />
  </svg>
);

const SvgTally3 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTally3;
