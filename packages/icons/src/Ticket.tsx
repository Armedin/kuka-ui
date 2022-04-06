import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M128 192c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192zm32 128h256V192H160v128zm416-192v80c-26.5 0-48 21.5-48 48s21.5 48 48 48v80c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-80c26.51 0 48-21.5 48-48s-21.49-48-48-48v-80c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64zM32 182.7C60.25 195 80 223.2 80 256s-19.75 60.1-48 73.3V384c0 17.7 14.33 32 32 32h448c17.7 0 32-14.3 32-32v-54.7c-28.3-13.2-48-40.5-48-73.3s19.7-61 48-73.3V128c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32v54.7z" />
  </svg>
);

const SvgTicket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTicket;
