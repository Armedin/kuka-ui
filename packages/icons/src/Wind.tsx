import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 192h352c44.1 0 80-35.9 80-80s-35.9-80-80-80h-32c-8.8 0-16 7.16-16 16s7.2 16 16 16h32c26.5 0 48 21.53 48 48s-21.5 48-48 48H16c-8.844 0-16 7.2-16 16s7.156 16 16 16zm160 128H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h160c26.5 0 48 21.5 48 48s-21.5 48-48 48h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c44.13 0 80-35.88 80-80s-35.9-80-80-80zm248-80H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h408c30.88 0 56 25.12 56 56s-25.1 56-56 56h-24c-8.844 0-16 7.156-16 16s7.156 16 16 16h24c48.53 0 88-39.47 88-88s-39.5-88-88-88z" />
  </svg>
);

const SvgWind = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWind;
