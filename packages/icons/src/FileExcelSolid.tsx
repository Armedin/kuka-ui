import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm48.1 136.4L224 344l48.99 79.61C279.6 434.3 271.9 448 259.4 448h-26.43a16.013 16.013 0 0 1-13.63-7.617L192 396l-27.31 44.38c-2.89 4.72-8.09 7.62-13.59 7.62h-26.5c-12.52 0-20.19-13.73-13.63-24.39L160 344l-49-79.6c-6.6-10.7 1.1-24.4 13.6-24.4h26.43c5.557 0 10.71 2.883 13.63 7.613L192 292l27.31-44.39c2.89-4.71 8.09-7.61 13.59-7.61h26.43c12.57 0 20.27 13.7 12.77 24.4zM256 0v128h128L256 0z" />
  </svg>
);

const SvgFileExcelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileExcelSolid;
