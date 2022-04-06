import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 480c32.2 0 62.8-6.8 90.5-19.9 5.8 10.2 11.6 18.9 19.9 26.9-34.3 16-70.9 25-110.4 25C114.6 512 0 397.4 0 256S114.6 0 256 0c119.4 0 219.6 81.67 247.1 192.2-1.8-.1-4.4-.2-7.1-.2-8.4 0-16.7.6-24.8 1.7C444.3 100.3 358.1 32 256 32 132.3 32 32 132.3 32 256s100.3 224 224 224zm-64-128c0-29.8 20.4-54.9 47.1-62V95.1c0-7.94 8.1-16 16-16 9.7 0 16 8.06 16 16V290c28.5 7.1 48.9 32.2 48.9 62 0 35.3-28.7 64-64 64s-64-28.7-64-64zm64 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM120 144c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm0 112c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24s10.75-24 24-24c13.3 0 24 10.7 24 24zm272-112c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm151.9 142.1c4.3 4.6 5.3 10.8 2.6 15.7L516.4 356H552c5.2 0 9.8 3.3 11.4 8.2 1.6 4.9-.1 10.3-4.2 13.4l-96 72c-4.5 2.5-10.8 3.2-15.1-.6-4.3-3.7-5.3-9.9-2.6-14.8l30.1-54.2H440c-5.2 0-9.8-3.3-11.4-8.2-2.5-4.9.1-10.3 4.2-13.4l96-72c4.5-3.4 10.8-3.2 15.1-.3zM640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zM496 256c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112z" />
  </svg>
);

const SvgGaugeCircleBolt = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeCircleBolt;