import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M32 384c-17.67 0-32 14.3-32 31.1v64C0 497.7 14.33 512 31.1 512S64 497.7 64 480v-64.9c0-16.8-14.33-31.1-32-31.1z" />
  </svg>
);

const SvgSignalWeakSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignalWeakSolid;
