import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm72-16c-13.25 0-24 10.75-24 24 0 13.3 10.75 24 24 24s24-10.7 24-24c0-13.25-10.75-24-24-24zm304 48c13.3 0 24-10.7 24-24 0-13.25-10.7-24-24-24s-24 10.75-24 24c0 13.3 10.7 24 24 24zM72 384c-13.25 0-24 10.7-24 24s10.75 24 24 24 24-10.7 24-24-10.75-24-24-24zm304 48c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24z" />
  </svg>
);

const SvgBlockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlockSolid;
