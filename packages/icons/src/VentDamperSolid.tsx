import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M176 272h288c8.8 0 16-7.2 16-16s-7.168-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0-64h288c8.8 0 16-7.2 16-16s-7.168-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16zm432-48h-32v-32c0-35.36-28.64-64-64-64H128c-35.36 0-64 28.64-64 64v32H32c-17.66 0-32 14.3-32 32v128c0 17.66 14.34 32 32 32h32v32c0 35.36 28.64 64 64 64h384c35.36 0 64-28.64 64-64v-32h32c17.66 0 32-14.34 32-32V192c0-17.7-14.3-32-32-32zm-96 224H128V128h384v256zm-336-48h288c8.832 0 16-7.168 16-16s-7.168-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgVentDamperSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVentDamperSolid;
