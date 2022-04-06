import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M512 32c17.6 0 32 14.4 32 32v287.3l28.03 22.13c2.418-6.732 3.968-13.9 3.968-21.45V63.1c0-35.25-28.75-63.1-63.1-63.1H127.1c-8.207 0-16 1.689-23.22 4.525L139.6 32H512zM367.9 384a32.004 32.004 0 0 0-19.21 6.406L256 460v-60c0-8.838-7.164-16-16-16H128c-17.6 0-32-14.4-32-32V160.7l-32-25.3V352c0 35.25 28.75 63.1 63.1 63.1h95.1v83.99c0 9.838 11.03 15.55 19.12 9.7l124.9-93.69 51.39.024-40.53-32h-9.18zm266 99.4L25.9 3.418C18.1-2.02 8.936-.848 3.436 6.059c-5.469 6.938-4.281 17 2.656 22.49l608 480C617 510.9 620.5 512 624 512c4.719 0 9.406-2.094 12.56-6.078C642 498.1 640.8 488.9 633.9 483.4z" />
  </svg>
);

const SvgMessageSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageSlash;
