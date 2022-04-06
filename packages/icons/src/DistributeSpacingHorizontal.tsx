import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 0c8.8 0 16 7.164 16 16v480c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.836 7.2-16 16-16zM320 368c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v224zm-32 0V144c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16zM32 496c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V16C0 7.164 7.164 0 16 0c8.84 0 16 7.164 16 16v480z" />
  </svg>
);

const SvgDistributeSpacingHorizontal = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDistributeSpacingHorizontal;
