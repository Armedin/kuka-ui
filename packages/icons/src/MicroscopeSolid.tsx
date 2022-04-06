import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M160 320h12v16c0 8.875 7.125 16 16 16h40c8.875 0 16-7.125 16-16v-16h12c17.62 0 32-14.38 32-32V64c0-17.62-14.38-32-32-32V16c0-8.875-7.1-16-16-16h-64c-8.9 0-16 7.125-16 16v16c-17.6 0-32 14.38-32 32v224c0 17.6 14.4 32 32 32zm304 128h-1.25C493.2 414 512 369.2 512 320c0-105.9-86.13-192-192-192v64c70.63 0 128 57.38 128 128s-57.38 128-128 128H48c-26.5 0-48 21.5-48 48 0 8.9 7.125 16 16 16h480c8.875 0 16-7.125 16-16 0-26.5-21.5-48-48-48zm-360-32h208c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8H104c-4.37 0-8 3.6-8 8v16c0 4.4 3.63 8 8 8z" />
  </svg>
);

const SvgMicroscopeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMicroscopeSolid;
