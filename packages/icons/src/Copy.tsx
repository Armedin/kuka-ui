import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 416c-8.8 0-16 7.2-16 16v16c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H63.99c-35.35 0-64 28.65-64 64L0 448c0 35.3 28.65 64 64 64h160c35.35 0 64-28.65 64-64v-16c0-8.8-7.2-16-16-16zM502.6 86.63 425.35 9.38C419.4 3.371 411.2 0 402.7 0H288c-35.3 0-64 28.65-64 64v256c0 35.35 28.65 64 64 64h160c35.35 0 64-28.65 64-64V109.3c0-8.5-3.4-16.67-9.4-22.67zM416 45.25 466.7 96H416V45.25zM480 320c0 17.67-14.33 32-32 32H288c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h96l.003 64c0 17.67 14.33 32 32 32H480v192z" />
  </svg>
);

const SvgCopy = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCopy;
