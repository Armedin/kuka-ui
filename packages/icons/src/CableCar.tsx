import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 24c0-13.25 10.7-24 24-24s24 10.75 24 24-10.7 24-24 24-24-10.75-24-24zm-48 32c0 13.25-10.7 24-24 24s-24-10.75-24-24 10.7-24 24-24 24 10.75 24 24zm264 232v160c0 35.3-28.7 64-64 64H96c-35.35 0-64-28.7-64-64V288c0-35.3 28.65-64 64-64h144v-76.5L19.14 191.7c-8.67 1.7-17.096-3.9-18.829-12.6-1.733-8.6 3.886-17.1 12.549-18.8L492.9 64.31c8.6-1.73 16.2 3.89 18.8 12.55 1.7 8.67-3.9 17.1-12.6 18.83L272 141.1V224h144c35.3 0 64 28.7 64 64zm-160-32H192v96h128v-96zm32 0v96h96v-64c0-17.7-14.3-32-32-32h-64zm96 128H64v64c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-64zM64 352h96v-96H96c-17.67 0-32 14.3-32 32v64z" />
  </svg>
);

const SvgCableCar = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCableCar;
