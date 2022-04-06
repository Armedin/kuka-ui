import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 0c-8.8 0-16 7.162-16 16v144H32V16c0-8.838-7.16-16-16-16S0 7.162 0 16v480c0 8.8 7.164 16 16 16s16-7.2 16-16v-48h576v48c0 8.836 7.164 16 16 16s16-7.164 16-16V16c0-8.838-7.2-16-16-16zm-16 416H32V192h576v224zM384 128h64c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v64c0 17.7 14.3 32 32 32zm0-96h64v64h-64V32zm-96 352h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32zm0-96h64v64h-64v-64zm-160 96h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32zm0-96h64v64h-64v-64z" />
  </svg>
);

const SvgShelves = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShelves;
