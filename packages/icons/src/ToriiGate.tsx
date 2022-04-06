import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 288c-8.836 0-16-7.2-16-16s7.164-16 16-16h48v-80c-35.35 0-64-28.7-64-64V0l71.37 23.79C87.68 29.23 104.8 32 121.1 32H390c17.2 0 34.3-2.77 50.6-8.21L512 0v112c0 35.3-28.7 64-64 64v80h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v208c0 8.8-7.2 16-16 16s-16-7.2-16-16V288H96v208c0 8.8-7.16 16-16 16s-16-7.2-16-16V288H16zm48-144h384c17.7 0 32-14.3 32-32V44.4l-29.2 9.75C431.2 60.67 410.7 64 390 64H121.1c-19.8 0-40.27-3.33-59.85-9.85L32 44.4V112c0 17.7 14.33 32 32 32zm176 32H96v80h144v-80zm176 80v-80H272v80h144z" />
  </svg>
);

const SvgToriiGate = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToriiGate;
