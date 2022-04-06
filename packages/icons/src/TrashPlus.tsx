import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M208 384v-80h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v80c0 8.8-7.2 16-16 16s-16-7.2-16-16zM310.1 22.56 336.9 64H432c8.8 0 16 7.16 16 16s-7.2 16-16 16h-18.3l-25.5 356.6c-2.3 33.5-31.1 59.4-63.8 59.4H123.6c-33.59 0-61.45-25.9-63.85-59.4L34.29 96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56zM148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6c-5.5 0-10.6 2.84-13.5 7.52L148.9 64zM91.67 450.3C92.87 467 106.8 480 123.6 480h200.8c16.8 0 30.7-13 31.9-29.7L381.6 96H66.37l25.3 354.3z" />
  </svg>
);

const SvgTrashPlus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrashPlus;
