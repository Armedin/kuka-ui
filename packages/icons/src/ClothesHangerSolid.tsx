import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M607.2 377 370.7 219.3l8.125-5.656C412.1 190.6 432 152.5 432 112 432 50.25 381.8 0 320 0c-53.1 0-99.2 37.69-109.8 89.66-3.5 17.31 7.688 34.19 25.03 37.72 17.27 3.42 34.17-7.68 36.87-25.08C277.5 80.13 297.3 64 320 64c26.47 0 48 21.53 48 48 0 19.59-9.594 37.97-25.69 49.13l-310.7 216.2C11.81 391.1 0 413.7 0 438.3 0 478.9 33.06 512 73.69 512h492.6c40.61 0 73.71-33.1 73.71-73.7 0-24.7-12.3-47.6-32.8-61.3zm-40.9 71H73.69c-5.35 0-9.69-4.3-9.69-10.2 0-3.156 1.562-6.156 4.156-7.938l246.1-171.2 257.5 171.6C574.4 432.1 576 435.1 576 438.3c0 5.4-4.3 9.7-9.7 9.7z" />
  </svg>
);

const SvgClothesHangerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClothesHangerSolid;
