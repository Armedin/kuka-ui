import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M184 240c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-48-128c0-13.25 10.7-24 24-24s24 10.75 24 24c0 13.3-10.7 24-24 24s-24-10.7-24-24zM256 0c35.3 0 64 28.65 64 64v288c0 88.4-71.6 160-160 160C71.63 512 0 440.4 0 352V64C0 28.65 28.65 0 64 0h192zm-96 320c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0-128c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0-32c26.5 0 48-21.5 48-48 0-26.51-21.5-48-48-48s-48 21.49-48 48c0 26.5 21.5 48 48 48z" />
  </svg>
);

const SvgTrafficLightGoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrafficLightGoSolid;
