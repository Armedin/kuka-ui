import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 160V64C0 28.65 28.65 0 64 0h256c35.35 0 64 28.65 64 64v96h-64V79.1c0-7.9-7.2-15.1-16-15.1s-16 7.2-16 15.1V160H0zm320 32v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V192H0v288c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V192h-64z" />
  </svg>
);

const SvgRefrigeratorSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRefrigeratorSolid;
