import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M248 56c0 30.93-25.1 56-56 56s-56-25.07-56-56 25.1-56 56-56 56 25.07 56 56zm-56-24c-13.3 0-24 10.75-24 24s10.7 24 24 24 24-10.75 24-24-10.7-24-24-24zm-48 480c-8.8 0-16-7.2-16-16V202.2l-49.88 93.3c-4.17 7.8-13.86 10.8-21.66 6.6-7.79-4.2-10.73-13.8-6.57-21.6l58.81-110.2c13.9-26 41.1-42.3 70.6-42.3H320V48c0-26.51 21.5-48 48-48h224c26.5 0 48 21.49 48 48v224c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48v-80h32v80c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V48c0-8.84-7.2-16-16-16H368c-8.8 0-16 7.16-16 16v80h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H256v336c0 8.8-7.2 16-16 16s-16-7.2-16-16V352h-64v144c0 8.8-7.2 16-16 16zm35.3-352c-6.8 0-14.2 1.4-19.3 4v156h64V160h-44.7z" />
  </svg>
);

const SvgPersonChalkboard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonChalkboard;
