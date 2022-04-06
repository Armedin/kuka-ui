import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M575.7 172.9c1.875 9.875-6.499 19.12-17.75 19.12L503.1 192 480 144l-24.9 48H320.4c14.87 56.62 41.12 179.5 26.37 293-1.17 15.6-15.17 27-30.87 27h-55.1c-20.75 0-36.12-19.5-30.1-39.63C244.1 415.2 266.3 305 255.6 200.2L109.5 346.3c-7.1 8-20.37 7.375-26.12-1-35.37-51.7-21.62-133.2 35.42-190.2 3.375-3.375 7.125-5.1 10.75-9.125L96.01 79.1l-24 48.9-54-.9c-11.25 0-19.62-9.25-17.75-19.12C11.89 47.25 78.63 0 159.3 0c74.12 0 135.9 40.12 154.5 94.5C340.9 75.75 377.42 64 415.9 64c81.5-.9 148.2 47.2 159.8 108.9z" />
  </svg>
);

const SvgTreePalmSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTreePalmSolid;
