import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M224 416c0 35.3-28.7 64-64 64-26.47 0-48-21.53-48-48s21.5-48 48-48c8.836 0 16-7.164 16-16s-7.2-16-16-16c-44.11 0-80 35.89-80 79.1s35.9 80.9 80 80.9c52.94 0 96-43.06 96-96V288h-32v128zm192-96c-8.836 0-16 7.164-16 15.1s7.2 16.9 16 16.9c26.47 0 48 21.53 48 48s-21.5 48-48 48c-35.3 0-64-28.7-64-64v-96h-32v96c0 52.94 43.06 96 96 96 44.11 0 80-35.89 80-80s-35.9-80-80-80zM512 0H64C28.8 0 0 28.8 0 64v128c0 35.2 28.8 64 64 64h448c35.2 0 64-28.8 64-64V64c0-35.2-28.8-64-64-64zm32 192c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.3-32-32V64c0-17.67 14.33-32 32-32h448c17.67 0 32 14.33 32 32v128zm-80-64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgAirConditioner = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAirConditioner;
