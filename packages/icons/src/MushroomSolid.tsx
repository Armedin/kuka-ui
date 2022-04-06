import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 352H192l-22.06 88.24C164.9 460.4 180.2 480 200.1 480h110c20.82 0 36.09-19.56 31.04-39.76L320 352zm170.5-110-6.3-27.9C460.4 107.7 365.6 32 256 32S51.55 107.7 27.78 214.1L21.53 242c-8.93 40 21.49 78 61.57 78h344c41 0 72.3-38 63.4-78zM128 256c-17.7 0-32-14.3-32-32 0-17.67 14.33-32 32-32s32 14.33 32 32c0 17.7-14.3 32-32 32zm96-80c-37.36 0-68.48-25.72-77.28-60.35C177.5 93.3 215.2 80 256 80c16.29 0 31.87 2.674 46.98 6.562C303.4 89.67 304 92.75 304 96c0 44.2-35.8 80-80 80zm176 80c-26.5 0-48-21.5-48-48s21.5-48 48-48c3.178 0 6.27.344 9.275.934 12.8 18.86 22.59 40.1 27.84 63.57l2.391 10.7C430.8 247.8 416.4 256 400 256z" />
  </svg>
);

const SvgMushroomSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMushroomSolid;
