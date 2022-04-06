import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M219.9 189.3c5.9 6.6 5.4 15.8-1.2 22.6l-49 44.1H240c44.2 0 80 35.8 80 80v40c0 8.8-7.2 16-16 16s-16-7.2-16-16v-40c0-26.5-21.5-48-48-48h-70.3l49 44.1c6.6 5.9 7.1 16 1.2 22.6-6.8 6.6-16 7.1-22.6 1.2l-80-72c-3.4-3-5.3-7.4-5.3-12.8 0-3.6 1.9-8 5.3-11l80-72c6.6-5.9 15.8-5.4 22.6 1.2zM432 64c8.8 0 16 7.16 16 16s-7.2 16-16 16h-18.3l-25.5 356.6c-2.3 33.5-31.1 59.4-63.8 59.4H123.6c-33.59 0-61.45-25.9-63.85-59.4L34.29 96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56L336.9 64H432zM177.7 32c-5.5 0-10.6 2.84-13.5 7.52L148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6zm203.9 64H66.37l25.3 354.3C92.87 467 106.8 480 123.6 480h200.8c16.8 0 30.7-13 31.9-29.7L381.6 96z" />
  </svg>
);

const SvgTrashUndo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrashUndo;
