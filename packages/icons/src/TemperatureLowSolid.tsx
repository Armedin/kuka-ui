import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M160 322.9V304c0-8.7-7.2-16-16-16s-16 7.3-16 16v18.88C109.4 329.5 96 347.1 96 368c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1zM256 112C256 50.12 205.87 0 144 0S32 50.13 32 112v166.5C12.25 303.25 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.1-12.25-64.88-32-89.5V112zM144 448c-44.13 0-80-35.88-80-80 0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.1c19.75 14.75 32 38.38 32 63.88 0 44.17-35.9 80.07-80 80.07zM416 0c-52.88 0-96 43.13-96 96s43.13 96 96 96 96-43.13 96-96-43.1-96-96-96zm0 128c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.2 32-32 32z" />
  </svg>
);

const SvgTemperatureLowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTemperatureLowSolid;
