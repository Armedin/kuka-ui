import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm128 360c0 13.25-10.75 24-24 24s-24-10.75-24-24V226.2l-60.55 83.83c-9.031 12.5-29.88 12.5-38.91 0L176 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.41 6.719-19.64 16.61-22.83 9.859-3.25 20.75.313 26.84 8.781L256 255l84.55-117.1c6.094-8.469 16.89-12.03 26.84-8.781C377.3 132.4 384 141.6 384 152v208z" />
  </svg>
);

const SvgCircleMSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleMSolid;
