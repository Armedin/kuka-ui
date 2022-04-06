import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352.1 128h-32.07l.012-80c0-26.47-21.53-48-48-48h-96c-26.47 0-48 21.53-48 48L128 128H96.12c-35.35 0-64 28.65-64 64v224c0 35.35 28.58 64 63.93 64L96 496c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h192v16c0 8.836 7.164 16 16 16s16-7.164 16-16l.05-16c35.35 0 64.07-28.65 64.07-64V192c-.02-35.3-28.62-64-64.02-64zM160 48c0-8.83 7.2-16 16-16h96c8.8 0 16 7.17 16 16v80H160V48zm224 368c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32V192c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32v224zm-80-80H144c-8.8 0-16 7.2-16 16 0 8.836 7.164 16 16 16h160c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zm0-96H144c-8.8 0-16 7.2-16 16 0 8.836 7.164 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgSuitcaseRolling = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSuitcaseRolling;
