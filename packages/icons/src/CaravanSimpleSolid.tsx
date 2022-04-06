import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M416 32c88.4 0 160 71.6 160 160v160h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c0 53-43 96-96 96-53.9 0-96-43-96-96H80c-44.18 0-80-35.8-80-80V112c0-44.18 35.82-80 80-80h336zM64 224c0 17.7 14.33 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96c-17.67 0-32 14.3-32 32v64zm288-96c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64zM192 368c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
  </svg>
);

const SvgCaravanSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCaravanSimpleSolid;
