import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm110.6 190.6L245.3 312H312c17.67 0 32 14.31 32 32s-14.33 32-32 32H168c-17.67 0-32-14.31-32-32V200c0-17.69 14.33-32 32-32s32 14.31 32 32v66.75l121.4-121.4c12.5-12.5 32.75-12.5 45.25 0s12.45 32.75-.05 45.25z" />
  </svg>
);

const SvgCircleArrowDownLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowDownLeftSolid;
