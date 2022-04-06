import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.69-192-80.01C269.6 1.656 261.3 0 256.1 0c-5.3 0-13.6 1.656-18.5 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1 16 385.2 205.2 512 255.1 512c52 0 240.9-128.2 240.9-384.9 0-18.5-11.7-36.02-29.5-43.41zM280 258.4V328c0 13.25-10.75 24-24 24s-24-10.75-24-24v-69.6c-18.9-9-32-28.1-32-50.4 0-30.93 25.07-56 56-56s56 25.07 56 56c0 22.3-13.1 41.4-32 50.4z" />
  </svg>
);

const SvgShieldKeyholeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldKeyholeSolid;
