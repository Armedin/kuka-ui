import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M192 296c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm192 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zM322.2 24.07c-4.5-7.64-1.9-17.433 5.7-21.886 7.7-4.452 17.5-1.874 21.9 5.759L457.2 192H560c8.8 0 16 7.2 16 16s-7.2 16-16 16h-24l-59.9 239.5c-8 28.5-32.7 48.5-62.1 48.5H161.1c-28.5 0-54.1-20-61.22-48.5L40 224H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h102.8L226.2 7.943c4.4-7.633 14.2-10.211 21.9-5.759 7.6 4.453 10.2 14.246 5.7 21.886L155.9 192h264.2L322.2 24.07zM503 224H72.98l57.92 231.8c3.6 14.2 16.4 24.2 30.2 24.2H414c14.7 0 27.5-10 31.1-24.2L503 224z" />
  </svg>
);

const SvgBasketShoppingSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBasketShoppingSimple;
