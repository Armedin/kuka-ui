import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 448c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32c0-17.7-14.33-32-32-32zm112-64c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM384 80c-3.281 0-6.438.313-9.594.719C355.1 32.17 308.3 0 256 0c-51.6 0-98.2 31.59-117.8 79.27-3.4-.43-6.8-.77-10.2-.77-70.59 0-128 57.48-128 128.1s57.41 127.9 128 127.9c12.62 0 25.41-2.062 38.13-6.125C182.9 362.7 217.4 384.5 256 384.5c38.03 0 72.31-21.27 89.31-54.77C358.2 333.9 371.2 336 384 336c70.59 0 128-57.37 128-127.9S454.6 80 384 80z" />
  </svg>
);

const SvgThoughtBubbleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgThoughtBubbleSolid;
