import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm126.6 302.6L279.5 405.7c-8.8 8.9-18.6 10.3-23.5 10.3-4.881 0-14.65-1.391-22.65-9.398L129.4 302.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 306.8V128c0-17.69 14.33-32 32-32s32 14.31 32 32v178.8l49.38-49.38c12.5-12.5 32.75-12.5 45.25 0s12.47 32.68-.03 45.18z" />
  </svg>
);

const SvgCircleArrowDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowDownSolid;
