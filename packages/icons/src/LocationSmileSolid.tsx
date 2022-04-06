import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zM128 192c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm128-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM128.6 244.9c-6.1-9.2-18.5-11.7-27.7-5.5-9.18 6.1-11.67 18.5-5.54 27.7C106.9 284.4 140.9 316 192 316s85.1-31.6 96.6-48.9c6.2-9.2 3.7-21.6-5.5-27.7-9.2-6.2-21.6-3.7-27.7 5.5-6.3 9.4-29.1 31.1-63.4 31.1s-57.1-21.7-63.4-31.1z" />
  </svg>
);

const SvgLocationSmileSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationSmileSolid;
