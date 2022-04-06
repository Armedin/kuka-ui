import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 32.01c-123.5 0-224 100.5-224 224s100.5 224 224 224 224-100.5 224-224-100.5-224-224-224zM224 416c-88.22 0-160-71.78-160-160S135.78 96.9 224 96.9 384 168.68 384 256s-71.8 160-160 160z" />
  </svg>
);

const SvgOSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOSolid;
