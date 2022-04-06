import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 112c0-44.18 35.82-80 80-80h336c88.4 0 160 71.6 160 160v160h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c0 53-43 96-96 96-53.9 0-96-43-96-96H80c-44.18 0-80-35.8-80-80V112zm320 240h128v-96h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v192zM96 128c-17.67 0-32 14.3-32 32v64c0 17.7 14.33 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96zm96 336c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

const SvgCaravanSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCaravanSolid;
