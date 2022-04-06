import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 256c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96zm-96-64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0-192c8.8 0 16 7.164 16 16v48.66C365.3 72.35 439.6 146.7 447.3 240H496c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48.7c-7.7 93.3-82 167.6-175.3 175.3V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48.7c-93.3-7.7-167.65-82-175.34-175.3H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h48.66C72.35 146.7 146.7 72.35 240 64.66V16c0-8.836 7.2-16 16-16zM96 256c0 88.4 71.6 160 160 160s160-71.6 160-160S344.4 96 256 96 96 167.6 96 256z" />
  </svg>
);

const SvgLocationCrosshairs = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationCrosshairs;
