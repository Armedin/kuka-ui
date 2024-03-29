import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 160v224c0 17.69-14.33 32-32 32H64c-17.67 0-32-14.31-32-32s14.33-32 32-32h146.8L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 306.8V160c0-17.69 14.33-32 32-32s32 14.3 32 32z" />
  </svg>
);

const SvgArrowDownRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownRightSolid;
