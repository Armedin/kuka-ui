import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm16.1 384h-48.7c-28.23 0-53.2-18-62.13-44.78-4.188-12.59 2.609-26.19 15.19-30.38 12.53-4.062 26.16 2.625 30.34 15.19 2.4 7.17 9 11.97 16.6 11.97h49.59c17.11 0 31.01-13.9 31.01-31.1 0-15.75-11.78-29-27.41-30.81l-87.39-10.28a24.04 24.04 0 0 1-16.56-9.656c-3.94-5.354-5.44-12.054-4.24-18.654l16.73-88c2.17-11.3 12.07-19.5 23.57-19.5H312c13.25 0 24 10.75 24 24s-10.7 24-24 24h-83.4l-8.2 43.2 61.8 7.25c38.9 4.65 69.8 38.35 69.8 78.45 0 43.6-35.5 79.1-79.9 79.1z" />
  </svg>
);

const SvgCircle5Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle5Solid;
