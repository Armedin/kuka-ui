import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M48 32C21.5 32 0 53.5 0 80v64c0 8.9 7.125 16 16 16h80V80c0-26.5-21.5-48-48-48zm208 348.6V320h224V128c0-53-43-96-96-96H111.6C121.8 45.38 128 61.88 128 80v304c0 38.88 34.62 69.63 74.75 63.13C234.3 442 256 412.5 256 380.6zm32-28.6v32c0 52.88-43 96-96 96h272c61.88 0 112-50.13 112-112 0-8.875-7.125-16-16-16H288z" />
  </svg>
);

const SvgScrollSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScrollSolid;
