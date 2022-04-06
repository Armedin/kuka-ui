import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 256v208c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.5-48-48V256c31.16-41.54 48-92.07 48-144V16c0-8.838 7.16-16 16-16h32c8.836 0 16 7.162 16 16v64c0 44.2 35.8 80 80 80s80-35.82 80-80V16c0-8.838 7.2-16 16-16h32c8.836 0 16 7.162 16 16v96c0 51.9 16.8 102.5 48 144z" />
  </svg>
);

const SvgShirtTankTopSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShirtTankTopSolid;
