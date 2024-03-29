import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M383.1 160v64c0 17.62-14.37 32-31.1 32h-96v224c0 17.62-14.38 32-31.1 32H160c-17.62 0-32-14.38-32-32V256H32c-17.63 0-32-14.4-32-32v-64c0-17.62 14.38-32 32-32h96V32c0-17.62 14.38-32 32-32h64c17.62 0 31.1 14.38 31.1 32v96h96c18.5 0 32 14.4 32 32z" />
  </svg>
);

const SvgCrossSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCrossSolid;
