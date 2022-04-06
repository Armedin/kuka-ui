import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M416 432c0 8.838 7.164 16 16 16h192c8.836 0 16-7.162 16-16 0-8.836-7.164-16-16-16H432c-8.8 0-16 7.2-16 16zM640 80c0-8.84-7.2-16-16-16H494.3c-24.09 0-46.69 10.69-61.94 29.34l-249.6 305.1C173.7 409.6 160.1 416 145.7 416H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h129.7c24.09 0 46.69-10.69 61.94-29.34l249.6-305.1C466.3 102.4 479.9 96 494.3 96H624c8.8 0 16-7.16 16-16z" />
  </svg>
);

const SvgAlt = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlt;
