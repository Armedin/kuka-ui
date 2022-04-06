import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.9 483.4c7 5.5 8.1 14.7 2.7 22.5-5.5 7-15.6 8.1-22.5 2.7L6.086 28.56C-.849 23.08-2.033 13.02 3.443 6.086 8.918-.849 18.98-2.033 25.91 3.443L633.9 483.4zM480 480H159.1c-34.4 0-64-28.7-64-64V160.7l32 24.4V416c0 17.7 15.2 32 32 32h300.8l37.5 29.6c-5.5 1.6-11.4 2.4-17.4 2.4zM142.6 34.4c5.5-1.56 10.5-2.4 16.5-2.4H480c35.3 0 64 28.65 64 64v255.3L512 326V96c0-17.67-14.3-32-32-32H180.1l-37.5-29.6zm128.5 265.2V368c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16v-93.6l32 25.2zm140.7-52.7c2.7-7.1 4.2-14.8 4.2-22.9 0-35.3-28.7-64-64-64h-50.3l-40.4-31.9c.9 0 1.8-.1 1.8-.1H352c53 0 96 42.1 96 96 0 15.6-3.7 30.3-10.3 43.4l-25.9-20.5z" />
  </svg>
);

const SvgSquareParkingSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareParkingSlash;
