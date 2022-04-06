import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M351.8 367.3v-44.1c-23.3-12.5-49.4-19.2-77.1-19.2H173.3C77.57 304 0 381.65 0 477.4 0 496.5 15.52 512 34.66 512h378.7c11.86 0 21.82-6.337 28.07-15.43L379.78 435c-18.08-18.1-27.98-42.1-27.98-67.7zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm406.6 108.8-90.3-90c-12-12-28.3-18.8-45.3-18.8h-79.23a31.894 31.894 0 0 0-31.99 32l.015 79.2c0 17 6.647 33.15 18.65 45.15l90.31 90.27c12.5 12.5 32.74 12.5 45.24 0l92.49-92.5c12.615-12.52 12.615-32.82.115-45.32zm-182.8-20.9c-13.25 0-24-10.62-24-24 0-13.25 10.75-24 24-24 13.38 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgUserTagSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserTagSolid;
