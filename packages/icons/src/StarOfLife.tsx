import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M477.9 384a16.03 16.03 0 0 1-13.88 8c-2.721 0-5.472-.688-7.99-2.156l-183.1-106.1V496c0 8.844-7.161 16-16.01 16s-16.01-7.156-16.01-16V283.7L57.81 389.8c-4.3 1.5-7.06 2.2-9.78 2.2a16.023 16.023 0 0 1-13.88-8c-4.425-7.656-1.798-17.44 5.863-21.84L224 256 40.01 149.8a15.904 15.904 0 0 1-5.86-21.8c4.425-7.656 14.23-10.31 21.87-5.844l183.1 106.1V16C239.1 7.156 247.2 0 256 0s16.01 7.156 16.01 16v212.3l183.1-106.1c8.49-4.5 18.29-1.9 22.79 5.8 4.425 7.656 1.798 17.44-5.863 21.84L287.1 256l183.1 106.2c9.4 4.4 12.1 14.1 7.7 21.8z" />
  </svg>
);

const SvgStarOfLife = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarOfLife;
