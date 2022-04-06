import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M48 384c-26.4 0-48 21.6-48 47.1v32C0 490.4 21.6 512 47.1 512S96 490.4 96 464v-32c0-26.4-21.6-48-48-48z" />
  </svg>
);

const SvgSignalBarsWeakSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignalBarsWeakSolid;
