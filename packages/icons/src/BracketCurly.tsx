import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M96 152.5V112c0-26.47 21.5-48 48-48h64c8.8 0 16-7.18 16-16s-7.2-16-16-16h-64c-44.11 0-80 35.89-80 80v40.45c0 38.03-21.13 72.22-55.16 89.23C3.383 244.4 0 249.9 0 256s3.383 11.56 8.828 14.3C42.87 287.3 64 321.5 64 359.5V400c0 44.11 35.89 80 80 80h64c8.822 0 16-7.178 16-16s-7.2-16-16-16h-64c-26.5 0-48-21.5-48-48v-40.45C96 318.7 77.43 280.8 45.79 256 77.43 231.2 96 193.3 96 152.5z" />
  </svg>
);

const SvgBracketCurly = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketCurly;
