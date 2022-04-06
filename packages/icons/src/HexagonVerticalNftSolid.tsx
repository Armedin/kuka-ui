import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M220.9 17.65a71.983 71.983 0 0 1 72 0l152.9 88.25a72.1 72.1 0 0 1 36 62.4v176.6c0 25.7-13.7 49.5-36 62.3l-152.9 88.3a71.814 71.814 0 0 1-72 0L68 407.2c-22.28-12.8-36-36.6-36-62.3V168.3c0-25.7 13.72-49.5 36-62.4l152.9-88.25zM127.8 170.6c-2.9-7.1-10.4-11.2-17.9-9.7-7.5 1.4-12.98 8-12.98 15.7v160c0 8.8 7.18 16 15.98 16 8.9 0 16-7.2 16-16v-76.9l33.2 82.8c2.8 7.1 10.3 11.2 17.8 9.8 7.6-1.5 13-8.1 13-15.7v-160c0-8.9-7.1-16-16-16-8.8 0-16 7.1-16 16v76.9l-33.1-82.9zm97.1 166c0 8.8 7.2 16 16 16 8.9 0 16-7.2 16-16v-64h32c8.9 0 16-7.2 16-16 0-8.9-7.1-16-16-16h-32v-48h32c8.9 0 16-7.2 16-16 0-8.9-7.1-16-16-16h-48c-8.8 0-16 7.1-16 16v160zm112-176c-8.8 0-16 7.1-16 16 0 8.8 7.2 16 16 16h16v144c0 8.8 7.2 16 16 16 8.9 0 16-7.2 16-16v-144h16c8.9 0 16-7.2 16-16 0-8.9-7.1-16-16-16h-64z" />
  </svg>
);

const SvgHexagonVerticalNftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHexagonVerticalNftSolid;
