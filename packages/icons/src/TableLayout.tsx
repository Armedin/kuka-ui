import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 32H64c-17.67 0-32 14.33-32 32v64h448V96c0-17.67-14.3-32-32-32zM64 448h96V192H32v224c0 17.7 14.33 32 32 32zm128 0h256c17.7 0 32-14.3 32-32V192H192v256z" />
  </svg>
);

const SvgTableLayout = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTableLayout;
