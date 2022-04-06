import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.71-192-80C269.6 1.672 261.3 0 256.1 0c-5.3 0-13.6 1.672-18.5 3.703L45.61 83.71C27.7 91.1 16 108.6 16 127.1 16 385.2 205.2 512 255.9 512 307.1 512 496 383.8 496 127.1c0-18.5-11.7-36-29.5-43.39zM421.2 224H288v203.7c-11.4 7.871-22.32 14.26-32.08 18.81C245.3 441.7 234.6 435.6 224 428.5V224H90.88c-4.73-20.2-7.89-41.6-9.53-64H224V78.67l32.05-13.35L288 78.63V160h142.6c-2.5 22.7-4.8 44.1-9.4 64z" />
  </svg>
);

const SvgShieldCrossSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldCrossSolid;
