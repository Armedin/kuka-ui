import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 64.01c0 17.67-14.33 32-32 32H224v352c0 17.67-14.33 31.99-32 31.99s-32-14.32-32-31.99v-352H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h320c17.7 0 32 14.33 32 32z" />
  </svg>
);

const SvgTSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTSolid;
