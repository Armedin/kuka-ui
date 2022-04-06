import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 112c0-8.8 7.2-16 16-16h336v192h32V96h48c8.8 0 16 7.2 16 16v176h32V112c0-26.51-21.5-48-48-48H112c-26.51 0-48 21.49-48 48v176h32V112zm528 208H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h16v48c0 26.5 21.53 48 48 48h480c26.47 0 48-21.53 48-48v-48h16c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-48 80c0 8.828-7.188 16-16 16H80c-8.81 0-16-7.2-16-16v-48h512v48z" />
  </svg>
);

const SvgButter = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgButter;
