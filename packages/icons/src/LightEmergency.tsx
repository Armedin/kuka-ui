import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M80 320c8.96 0 16-7.2 16-16V192c0-70.69 57.28-128 128-128s128 57.31 128 128v112c0 8.832 7.039 16 16 16s16-7.2 16-16V192c0-88.35-71.68-160-160-160S64 103.6 64 192v112c0 8.8 7.04 16 16 16zm320 32H48c-26.56 0-48 21.5-48 48v32c0 26.5 21.44 48 48 48h352c26.56 0 48-21.5 48-48v-32c0-26.5-21.4-48-48-48zm16 80c0 8.832-7.039 16-16 16H48c-8.96 0-16-7.2-16-16v-32c0-8.8 7.04-16 16-16h352c8.961 0 16 7.168 16 16v32zM128 176c0 8.8 7 16 16 16s16-7.2 16-16c0-26.5 21.4-48 48-48 8.1 0 16-7.2 16-16s-7.9-16-16-16c-44.2 0-80 35.9-80 80z" />
  </svg>
);

const SvgLightEmergency = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLightEmergency;
