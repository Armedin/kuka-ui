import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M496 224c-79.6 0-144 64.4-144 144s64.38 144 144 144 144-64.38 144-144-64.4-144-144-144zm48 160h-54.25c-5.35 0-9.75-4.4-9.75-9.7V304c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32c8.838 0 16 7.162 16 16 0 8.8-7.2 16-16 16zm-223.9-32H208c-8.8 0-16-7.2-16-16v-48H0v144c0 25.6 22.41 48 48 48h312.2c-25.1-30.4-40.2-69.5-40.2-112 0-5.4.5-10.7.1-16zM496 192c5.402 0 10.72.33 16 .807V144c0-25.6-22.4-48-48-48h-80V48c0-25.59-22.4-48-48-48H176c-25.6 0-48 22.41-48 48v48H48c-25.59 0-48 22.4-48 48v112h360.2c32.3-39.1 81.1-64 135.8-64zM336 96H176V48h160v48z" />
  </svg>
);

const SvgBusinessTimeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBusinessTimeSolid;
