import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 48v416c0 8.8-7.2 16-16 16s-16-7.2-16-16v-11.5l-194.1-49.4c-9.2 44.3-47.7 76.9-93.9 76.9-53.9 0-96-43-96-96 0-9.2 1.3-18.1 3.7-26.6L32 324.5V336c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V176c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v11.5L544 59.51V48c0-8.84 7.2-16 16-16s16 7.16 16 16zm-32 371.5V92.49L32 220.5v71l512 128zM256 448c31.2 0 57.1-22.3 62.8-51.8l-124-31c-2.7 5.9-2.8 12.3-2.8 18.8 0 35.3 28.7 64 64 64z" />
  </svg>
);

const SvgMegaphone = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMegaphone;
