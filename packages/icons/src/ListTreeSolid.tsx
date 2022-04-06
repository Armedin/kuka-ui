import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M72 48c13.25 0 24 10.75 24 24v48c0 13.3-10.75 24-24 24v88h56c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24H72v104c0 4.4 3.58 8 8 8h48c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24H80c-30.93 0-56-25.1-56-56V144c-13.25 0-24-10.7-24-24V72c0-13.25 10.75-24 24-24h48zm88 48c0-17.67 14.3-32 32-32h288c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm128 160c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32z" />
  </svg>
);

const SvgListTreeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgListTreeSolid;
