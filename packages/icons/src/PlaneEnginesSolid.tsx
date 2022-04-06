import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M482.3 320H365.7l-37.2 65.1C342 388.9 352 401.3 352 416c0 17.7-14.3 32-32 32h-27.4l-27.4 47.9c-5.7 9.9-16.3 16.1-27.8 16.1h-56.2c-10.6 0-18.3-10.2-15.4-20.4L214.9 320H112l-43.2 57.6c-3.02 4-7.76 6.4-12.8 6.4H14.03C6.284 384 0 377.7 0 369.1c0-.4.182-1.7.54-3l22.67-79.3C9.809 282.1 0 270.6 0 256c0-14.6 9.809-27 23.21-30.8L.54 145.9C.182 144.6 0 143.3 0 142c0-7.7 6.284-14 14.03-14H56c5.04 0 9.78 2.4 12.8 6.4L112 192h102.9L165.8 20.4C162.9 10.17 170.6 0 181.2 0h56.2c11.5 0 22.1 6.153 27.8 16.12L292.6 64H320c17.7 0 32 14.33 32 32 0 14.7-10 27.1-23.5 30.9l37.2 65.1h116.6c34.2 0 93.7 29 93.7 64 0 36-59.5 64-93.7 64z" />
  </svg>
);

const SvgPlaneEnginesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlaneEnginesSolid;
