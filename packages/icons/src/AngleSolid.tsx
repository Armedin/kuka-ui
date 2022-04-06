import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M83.78 416H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-11.09 0-21.39-5.7-27.221-15.2-5.831-9.4-6.36-21.2-1.401-31.1L195.4 49.69c7.9-15.81 27.1-22.22 42.9-14.31 15.8 7.9 22.2 27.12 14.3 42.93L83.78 416zM240.4 174.3c29 22.1 54.4 48.8 75.1 78.9l-40.8 25.3c-15.8-22.6-34.8-43-56.2-60.4l21.9-43.8zM321.1 384c-6.2-27.8-16.2-54.1-29.5-78.3l40.8-25.4c17.8 31.8 30.7 66.7 37.7 102.8l-49 .9z" />
  </svg>
);

const SvgAngleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAngleSolid;
