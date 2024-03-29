import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m52.51 440.6 171.5-142.9v-83.4L52.51 71.41C31.88 54.28 0 68.66 0 96.03v319.9c0 27.37 31.88 41.77 52.51 24.67zm255.99 0 192-159.1c15.25-12.87 15.25-36.37 0-49.24l-192-159.1c-20.63-17.12-52.51-2.749-52.51 24.62v319.9c.01 25.62 31.91 40.02 52.51 22.92z" />
  </svg>
);

const SvgForwardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgForwardSolid;
