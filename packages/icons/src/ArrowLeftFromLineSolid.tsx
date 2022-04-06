import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M182.6 361.4 109.3 288H288c17.69 0 32-14.31 32-32s-14.31-32-32-32H109.3l73.38-73.38C188.9 144.4 192 136.2 192 128s-3.1-16.4-9.4-22.6c-12.5-12.5-32.75-12.5-45.25 0l-128 128c-12.5 12.5-12.5 32.75 0 45.25l128 128c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25zM384 96v320c0 17.69 14.31 32 32 32s32-14.31 32-32V96c0-17.69-14.31-32-32-32s-32 14.31-32 32z" />
  </svg>
);

const SvgArrowLeftFromLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowLeftFromLineSolid;
