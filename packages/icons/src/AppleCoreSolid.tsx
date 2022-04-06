import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M288 32V0h-32c-44.18 0-80 35.82-80 80v32h32c44.2 0 80-35.82 80-80zm-.9 272c0-62.93 33.13-117.1 82.79-149.1-16.88-16.54-38.72-26.93-66.68-26.93-32 0-80.11 16.06-112.1 32.06-32.01-16-79.1-32.02-111.1-32.03-28.07 0-50.05 10.3-66.95 26.8C62.81 185.9 95.1 241 95.1 304c0 60.11-30.18 113.1-76.16 144.9C47.32 486.2 84.35 512 128 512c32 0 48-16 64-16s32 16 64 16c43.76 0 80.84-25.65 108.3-63.01-46.1-31.69-77.2-84.79-77.2-144.99z" />
  </svg>
);

const SvgAppleCoreSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAppleCoreSolid;
