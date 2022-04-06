import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448 160h64c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32h-64c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32zm0 160h128c17.6 0 32-14.4 32-32v-64c0-17.6-14.4-32-32-32H448c-17.6 0-32 14.4-32 32v64c0 17.6 14.4 32 32 32zm-224 0h128c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32H224c-17.6 0-32 14.4-32 32v224c0 17.6 14.4 32 32 32zm416 95.1c0 17.6-14.4 32-32 31.1l-66.88-.001c1.787 5.027 2.907 10.36 2.907 16 0 26.51-21.5 48-48.01 48-26.51 0-47.99-21.49-47.99-48 0-5.641 1.141-10.97 2.928-16H253.1C254.9 453 256 458.4 256 464c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.641 1.13-10.97 2.917-16l-66.92.001C78.4 448 64 433.6 64 415.1V80c0-8.84-7.16-16-16-16H31.1C14.4 64 0 49.6 0 32S14.4 0 31.1 0H64c35.2 0 64 28.8 64 64v320h480c17.6 0 32 14.4 32 31.1z" />
  </svg>
);

const SvgCartFlatbedBoxesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCartFlatbedBoxesSolid;
