import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M43.91 33.24c48.04 6 83.19 46.84 83.19 95.26v30.6h32c18.6 0 32 15.2 32 32 0 18.6-13.4 32-32 32h-32V384c0 17.7 15.2 32 32 32h32c71.6 0 128.9-57.3 128.9-128.9v-32c0-16.8-14.3-32-32-32h-16c-17.7 0-32-13.4-32-32 0-16.8 14.3-32 32-32h16c53 0 96 43 96 96v32C384 394 298 480 191.1 480h-32c-53 0-96-43-96-96V223.1h-32c-16.77 0-31.1-13.4-31.1-32 0-16.8 14.33-32 31.1-32h32v-30.6c0-16.1-11.12-29.75-27.13-31.76l-7.94-.99C10.49 93.56-1.946 77.57.247 60.03 2.439 42.49 18.43 30.05 35.97 32.25l7.94.99z" />
  </svg>
);

const SvgBangladeshiTakaSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBangladeshiTakaSignSolid;
