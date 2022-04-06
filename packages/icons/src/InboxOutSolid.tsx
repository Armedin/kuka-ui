import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 320h-96l-32 64H160l-32-64H32c-17.67 0-32 14.33-32 32v112c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V352c0-17.7-14.3-32-32-32zM182.6 150.6l41.4-41.3V288c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l41.38 41.38C335.6 156.9 343.8 160 352 160s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-96-96c-12.5-12.5-32.75-12.5-45.25 0l-96 96c-12.5 12.5-12.5 32.75 0 45.25s32.73 12.475 45.23-.025z" />
  </svg>
);

const SvgInboxOutSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInboxOutSolid;
