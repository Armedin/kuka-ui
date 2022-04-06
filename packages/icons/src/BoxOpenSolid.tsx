import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M75.23 33.4 320 63.1l244.8-29.7c6.7-.84 13.2 2.66 16.3 8.72l41.7 83.38c8.9 17.9-.6 39.6-19.9 45.1l-163.3 46.7c-13.9 3.9-28.8-1.9-36.2-15.2L320 63.1l-83.4 139c-7.4 13.3-22.3 19.1-36.2 15.2L37.07 170.6c-19.26-5.5-28.787-27.2-19.83-45.1l41.7-83.38c3.03-6.06 9.56-9.56 16.29-8.72zM321.1 128l54.8 91.4c14.9 24.8 44.6 35.7 72.5 28.6L576 211.6v166.9c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.8 2.6-31 0l-204.1-51C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248c27.9 7.1 57.6-3.8 72.5-28.6l54.8-91.4h2.2z" />
  </svg>
);

const SvgBoxOpenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxOpenSolid;
