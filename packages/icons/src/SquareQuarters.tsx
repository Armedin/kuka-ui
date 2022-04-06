import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zM64 64h320c2.881 0 5.633.383 8.289 1.088L224 233.4 55.71 65.09C58.37 64.38 61.12 64 64 64zM32 416V96a32.2 32.2 0 0 1 1.088-8.289L201.4 256 33.1 424.3c-.72-2.7-1.1-5.4-1.1-8.3zm352 32H64c-2.879 0-5.631-.385-8.287-1.088L224 278.6l168.3 168.3c-2.7.7-5.4 1.1-8.3 1.1zm32-32c0 2.879-.383 5.631-1.088 8.287L246.6 256 414.9 87.7c.7 2.67 1.1 5.42 1.1 8.3v320z" />
  </svg>
);

const SvgSquareQuarters = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareQuarters;
