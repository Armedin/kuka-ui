import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 192c0-88.35-71.68-160-160-160S64 103.6 64 192v160h320V192zm-160-80c-44.2 0-80 35.9-80 80 0 8.832-7.039 16-16 16s-16-7.2-16-16c0-61.76 50.24-112 112-112 8.961 0 16 7.168 16 16s-7.9 16-16 16zm192 272H32c-17.6 0-32 14.34-32 32v32c0 17.66 14.4 32 32 32h384c17.6 0 32-14.34 32-32v-32c0-17.7-14.4-32-32-32z" />
  </svg>
);

const SvgLightEmergencySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLightEmergencySolid;
