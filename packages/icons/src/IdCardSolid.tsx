import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 32H48C21.49 32 0 53.49 0 80v16h576V80c0-26.51-21.5-48-48-48zM0 432c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48V128H0v304zm368-240h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h128c8.836 0 16 7.164 16 16s-7.2 16-16 16H368c-8.836 0-16-7.164-16-16s7.2-16 16-16zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64-64-28.66-64-64 28.7-64 64-64zm-64 160h128c26.51 0 48 21.49 48 48 0 8.836-7.164 16-16 16H80c-8.84 0-16-7.2-16-16 0-26.5 21.49-48 48-48z" />
  </svg>
);

const SvgIdCardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIdCardSolid;
