import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zm-52.2-349.1 42 41-42 42.8c-9.4 9.4-9.4 24.6 0 34 9.4 9.4 24.6 9.4 34 0l41-42 42.8 42c9.4 9.4 24.6 9.4 34 0 9.4-9.4 9.4-24.6 0-34l-42-42.8 42-41c9.4-9.4 9.4-24.6 0-34-9.4-9.4-24.6-9.4-34 0l-42.8 42-41-42c-9.4-9.4-24.6-9.4-34 0-9.4 9.4-9.4 24.6 0 34z" />
  </svg>
);

const SvgLocationXmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationXmarkSolid;
