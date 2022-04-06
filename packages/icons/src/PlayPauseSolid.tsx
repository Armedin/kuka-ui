import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M52.51 71.41C31.88 54.28 0 68.66 0 96.03v319.9c0 27.37 31.88 41.74 52.51 24.62l192-159.1c15.25-12.87 15.25-36.37 0-49.24l-192-160.8zM352 64c-17.67 0-32.03 14.33-32.03 32v320c0 17.67 14.33 32 32 32 17.63 0 32.03-14.3 32.03-32V96c0-17.67-14.3-32-32-32zm128 0c-17.67 0-32.03 14.33-32.03 32v320c0 17.67 14.33 32 32 32 17.63 0 32.03-14.3 32.03-32V96c0-17.67-14.3-32-32-32z" />
  </svg>
);

const SvgPlayPauseSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlayPauseSolid;
