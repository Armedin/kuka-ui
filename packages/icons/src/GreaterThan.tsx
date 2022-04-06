import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M1.44 89.37c2.671-5.9 8.484-10.27 14.58-10.27 2.203 0 4.453.469 6.609 1.438l351.1 160C380.3 244 384 249.7 384 256c0 6.281-3.672 11.97-9.375 14.56l-351.1 160c-8.094 3.625-17.56.094-21.19-7.938-3.656-8.062-.11-17.53 7.938-21.19l319.1-145.4-319.1-145.4C1.33 106.9-2.217 97.44 1.44 89.37z" />
  </svg>
);

const SvgGreaterThan = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGreaterThan;
