import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M144 96c26.51 0 48-21.49 48-48S170.51 0 144 0 96 21.49 96 48s21.5 48 48 48zm208 320h-19.75l-12.5-99.97C317.8 300 304.1 288 288 288h-96v-32h64c17.67 0 32-14.33 32-32s-14.33-32-32-32h-64v-16c0-26.5-21.5-48-48-48s-48 21.5-48 48v128c0 26.5 21.5 48 48 48 1.826 0 3.559-.34 5.332-.54.968.04 1.768.54 2.668.54h107.8l12.5 99.97c2 15.13 15.6 28.03 31.7 28.03h48c17.67 0 32-14.31 32-32s-14.3-32-32-32zm-160-32h-64c-35.3 0-64-28.72-64-64V160c0-17.69-14.33-32-32-32S0 142.3 0 160v160c0 70.59 57.42 128 128 128h64c17.67 0 32-14.31 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgPersonSeatSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonSeatSolid;
