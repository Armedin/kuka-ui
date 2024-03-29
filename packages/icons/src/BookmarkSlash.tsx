import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M192 32h256c17.66 0 32 14.36 32 32v236.8l32 25.26V64c0-35.3-28.72-64-64-64H192c-23 0-43.9 12.28-54.3 30.53l25.45 20.09C168.3 39.7 179.2 32 192 32zm128 336c-3 0-5.969.828-8.594 2.5L160 466.9V211.2l-32-25.3v310c0 5.844 3.188 11.23 8.312 14.04 5.125 2.781 11.34 2.562 16.28-.531L320 402.1l167.4 106.5c2.6 2.6 5.6 3.4 8.6 3.4 2.656 0 5.281-.656 7.688-1.969C508.8 507.2 512 501.8 512 496v-3.877l-183.4-121.6C325.1 368.8 323 368 320 368zm313.9 115.4L25.9 3.418C18.1-2.02 8.936-.848 3.436 6.059c-5.469 6.939-4.281 17 2.656 22.49l608 480C617 510.9 620.5 512 624 512c4.719 0 9.406-2.094 12.56-6.078C642 498.1 640.8 488.9 633.9 483.4z" />
  </svg>
);

const SvgBookmarkSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookmarkSlash;
