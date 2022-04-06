import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M416 416c0 17.69 14.31 32 32 32h160c17.69 0 32-14.31 32-32s-14.31-32-32-32H448c-17.7 0-32 14.3-32 32zM640 96c0-17.69-14.31-32-32-32H448a32.034 32.034 0 0 0-25 12L176.6 384H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h160c9.719 0 18.91-4.406 25-12l246.4-308H608c17.7 0 32-14.3 32-32z" />
  </svg>
);

const SvgAltSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAltSolid;
