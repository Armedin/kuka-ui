import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M336 0H160c-35.2 0-64 28.75-64 64v288c0 35.25 28.75 64 64 64h224c35.25 0 64-28.75 64-64V112L336 0zm-96 144h64v48h-64v-48zm-80 32c0-17.75 14.25-32 32-32h16v48h-48v-16zm48 176h-16c-17.75 0-32-14.25-32-32v-16h48v48zm96 0h-64v-48h64v48zm80-32c0 17.75-14.25 32-32 32h-16v-48h48v16zm0-48H160v-48h224v48zm0-80h-48v-48h16c17.75 0 32 14.25 32 32v16zm-56 320H120C53.83 512 0 458.2 0 392V120c0-13.2 10.75-24 24-24s24 10.8 24 24v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgSimCardsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSimCardsSolid;
