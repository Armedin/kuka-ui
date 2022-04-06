import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" {...props}>
    <path d="M64 360c30.93 0 56 25.1 56 56s-25.07 56-56 56-56-25.1-56-56 25.07-56 56-56zm0-160c30.93 0 56 25.1 56 56s-25.07 56-56 56-56-25.1-56-56 25.07-56 56-56zm0-48c-30.93 0-56-25.1-56-56 0-30.93 25.07-56 56-56s56 25.07 56 56c0 30.9-25.07 56-56 56z" />
  </svg>
);

const SvgEllipsisVerticalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEllipsisVerticalSolid;
