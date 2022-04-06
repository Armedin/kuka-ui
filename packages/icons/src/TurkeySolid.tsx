import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M636.4 155.6c-7.375 19.5-26.62 33.38-47.5 33.88-10.75.375-21.25-2.5-30.25-8.251-15.12-9.626-33.87-11.63-48.63-1.375-27.62 19.25-69.87 57.25-90.62 120.5-14.37 44-51.87 78.51-97.75 83.01-4.25.375-8.5.625-12.62.625-57.37 0-101.7-39.5-113.6-89.76-.875-3.625-3.1-6.25-7.75-6.25H171.2c-2.5 0-4.75 1-6.25 2.875-1.45 1.746-2.05 4.246-1.75 6.546 3.1 20 12.12 39 23.87 55.63 28.12 40 72.62 63 121.9 63 5.25 0 10.37-.25 15.75-.75 56.87-5.625 105.1-46.88 124.1-105 11.25-35.25 32.5-66.5 60.1-90.13 40.75 52.88 65.28 113.9 65.28 163.9C576 498.9 447 512 288 512S0 498.9 0 383.1s129-288 287.1-288c45.87 0 88.1 14.61 127.4 37.86 23.87-10.38 32.62-17.25 48.12-28 13.25-9.126 18.12-25.5 14.5-41.13-1.5-6.875-1.625-14-.375-20.88 2.75-15.25 11.87-28.5 25.12-36.38 13.25-7.876 29.25-9.626 43.87-4.75 19.87 6.5 34.12 25.13 36.12 46 1.25 12.88-2.375 25.88-10.25 36.25 7.75-2.25 15.87-2.75 23.87-1.375C628.5 89.47 648.6 123.2 636.4 155.6z" />
  </svg>
);

const SvgTurkeySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurkeySolid;
