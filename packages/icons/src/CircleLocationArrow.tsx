import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M127.7 283c-11.7 0-21.9-8.3-24.2-19.8-2.4-11.4 3.7-23.1 13.6-27.7L338.5 141c9.5-3.9 20.2-1.9 27.3 5.3 7.1 7.1 9.2 17.8 5.2 27.2L276.5 394c-3.9 9.1-12.9 15-22.8 15-1.6 0-3.2-.1-4.9-.5-11.5-2.3-19.8-13.4-19.8-24.3V283H127.7zm132.4-32v97.1l74.4-170.5L163.1 251h97zm251.9 5c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgCircleLocationArrow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleLocationArrow;
