import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M304 120c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zM28.44 160H192c17.7 0 32-14.3 32-32v-24C224 46.56 270.6 0 328 0c44.3 0 82.2 27.75 97.2 66.84l79 47.46c4.9 2.9 7.8 8.1 7.8 13.7s-2.9 10.8-7.8 13.7L432 185.1V200c0 88.6-53.4 164.8-129.7 198.1l47.8 90.4c4.2 7.8 1.2 17.5-6.6 21.6-7.8 4.2-18.4 1.2-21.6-6.6l-50.2-94.8c-17.8 4.8-36.4 7.3-55.7 7.3h-.2l38.3 72.5c4.2 7.8 1.2 17.5-6.6 21.6-7.8 4.2-18.4 1.2-21.6-6.6l-48.1-90.9C76.7 394.6 0 306.2 0 200v-11.6C0 172.7 12.74 160 28.44 160zM32 192v8c0 101.6 82.4 184 184 184s184-82.4 184-184v-96c0-39.76-32.2-72-72-72s-72 32.24-72 72v24c0 35.3-28.7 64-64 64H32zm400-83.7v39.4l32.9-19.7-32.9-19.7z" />
  </svg>
);

const SvgBird = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBird;
