import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M494.8 9.891a16 16 0 0 0-8.66-8.66C484.2.421 482.1.001 480 .001L368 0c-8.8 0-16 7.156-16 16s7.2 16 16 16h73.38l-64.46 64.46C345.3 66.51 302.8 48 256 48c-97.9 0-176 78.1-176 176 0 91.63 70.45 167.1 160 175.2V432h-48c-8.844 0-16 7.156-16 16s7.156 16 16 16h48v32c0 8.844 7.156 16 16 16s16-7.156 16-16v-32h48c8.844 0 16-7.156 16-16s-7.2-16-16-16h-48v-32.81c89.55-8.123 160-83.56 160-175.2 0-38.68-12.7-74.36-33.93-103.4L464 54.63V128c0 8.844 7.156 16 16 16s16-7.156 16-16V16c0-2.08-.4-4.15-1.2-6.109zM256 368c-79.41 0-144-64.59-144-144S176.6 80 256 80s144 64.59 144 144-64.6 144-144 144z" />
  </svg>
);

const SvgMarsAndVenus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMarsAndVenus;
