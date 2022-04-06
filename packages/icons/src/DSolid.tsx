import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M160 32.01H32c-17.67 0-32 14.33-32 32v384c0 17.67 14.33 32 32 32l128-.007c123.5 0 224-100.5 224-224S283.5 32.01 160 32.01zM160 416H64V96h96c88.22 0 160 71.78 160 159.1S248.2 416 160 416z" />
  </svg>
);

const SvgDSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDSolid;
