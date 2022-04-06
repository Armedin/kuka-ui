import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M368 320h-48V192h48c44.2 0 80-35.8 80-80 0-44.18-35.8-80-80-80s-80 35.82-80 80v48H160v-48c0-44.18-35.8-80-80-80S0 67.82 0 112c0 44.2 35.82 80 80 80h48v128H80c-44.18 0-80 35.8-80 80s35.82 80 80 80 80-35.8 80-80v-48h128v48c0 44.18 35.82 80 80 80s80-35.82 80-80c0-44.2-35.8-80-80-80zm-48-208c0-26.47 21.5-48 48-48s48 21.53 48 48-21.5 48-48 48h-48v-48zM128 400c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.53-48 48-48h48v48zm0-240H80c-26.47 0-48-21.5-48-48s21.53-48 48-48 48 21.53 48 48v48zm160 160H160V192h128v128zm80 128c-26.47 0-48-21.53-48-48v-48h48c26.47 0 48 21.53 48 48s-21.5 48-48 48z" />
  </svg>
);

const SvgCommand = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommand;
