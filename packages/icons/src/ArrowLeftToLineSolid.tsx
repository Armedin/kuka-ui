import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M310.6 105.4c-12.5-12.5-32.75-12.5-45.25 0l-128 128c-12.5 12.5-12.5 32.75 0 45.25l128 128c12.5 12.5 32.75 12.5 45.25 0 6.3-6.25 9.4-14.45 9.4-22.65s-3.125-16.38-9.375-22.62L237.3 288H416c17.69 0 32-14.31 32-32s-14.31-32-32-32H237.2l73.38-73.38c12.52-12.52 12.52-32.72.02-45.22zM32 64C14.31 64 0 78.31 0 96v320c0 17.69 14.31 32 32 32s32-14.31 32-32V96c0-17.69-14.31-32-32-32z" />
  </svg>
);

const SvgArrowLeftToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowLeftToLineSolid;
