import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm120 344c0 17.69-14.33 32-32 32H200c-17.67 0-32-14.31-32-32s14.33-32 32-32h66.75L145.4 190.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L312 266.8V200c0-17.69 14.33-32 32-32s32 14.31 32 32v144z" />
  </svg>
);

const SvgCircleArrowDownRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowDownRightSolid;
