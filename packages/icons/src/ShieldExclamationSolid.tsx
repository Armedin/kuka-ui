import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.69-192-80.01C269.6 1.656 261.3 0 256.1 0c-5.3 0-13.6 1.656-18.5 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1 16 385.2 205.2 512 255.1 512c52 0 240.9-128.2 240.9-384.9 0-18.5-11.7-36.02-29.5-43.41zM232 152c0-13.2 10.8-24 24-24s24 10.75 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152zm24 232c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.3 32-32 32z" />
  </svg>
);

const SvgShieldExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldExclamationSolid;
