import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h256zM88.4 224.4c-21.87 21.9-21.87 57.3 0 79.2 21.9 21.9 57.3 21.9 79.2 0l7.4-7.4c.3-.4.7-.7.1-1v39.9h-16c-7.9 0-16 8.1-16 16 0 9.7 8.1 16 16 16h64c9.7 0 16-6.3 16-16 0-7.9-6.3-16-16-16h-16v-39.9c1.2.3 1.6.6 1 1l8.3 7.4c21.9 21.9 57.3 21.9 79.2 0 21.9-21.9 21.9-57.3 0-79.2l-87.5-86.6c-8.5-9.4-23.7-9.4-33.1 0l-86.6 86.6z" />
  </svg>
);

const SvgCardSpadeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCardSpadeSolid;
