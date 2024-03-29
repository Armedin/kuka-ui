import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M48 480h81.6c2.4 11.8 7.4 22.7 13.5 32H48c-26.51 0-48-21.5-48-48V112C0 50.14 50.14 0 112 0c54.9 0 100.5 39.47 110.1 91.56-11.5 5.95-20.9 15.24-27.1 26.74l-3 5.7v-12c0-44.18-35.8-80-80-80-44.18 0-80 35.82-80 80v48h140.8l-17.1 32H32v272c0 8.8 7.16 16 16 16zm352-288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h64zm-64 32v64h64v-64h-64zm161.3-104.9c6.6 2 12 7.9 15.4 14.3l59.5 111.5c2.5 4.7 3.8 9.8 3.8 15.1v204c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V260c0-5.3 1.3-10.4 3.8-15.1l59.5-111.5c3.4-6.4 8.8-12.3 15.4-14.3l116.5-50.95c8.2-3.58 17.4-3.58 25.6 0l116.5 50.95zm-245.8 29.3L192 260v204c0 8.8 7.2 16 16 16h80v-64c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V260l-59.5-111.6L368 97.46 251.5 148.4zM416 480v-64c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v64h96z" />
  </svg>
);

const SvgFarm = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFarm;
