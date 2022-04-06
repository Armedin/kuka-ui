import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v80c-26.5 0-48 21.5-48 48s21.5 48 48 48v80c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-80c26.51 0 48-21.5 48-48s-21.49-48-48-48v-80z" />
  </svg>
);

const SvgTicketSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTicketSimpleSolid;
