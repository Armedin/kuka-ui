import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M289.5 60.47c-23.75 23.88-34.5 55.63-33 86.75l108.3 108.3c31.13 1.5 62.88-9.25 86.76-33l2.125-2.25L291.8 58.35l-2.3 2.12zM6.73 423.1c-9.376 10.63-8.876 26.63 1 36.63l44.51 44.38c9.876 10 26 10.5 36.63 1.125l135.1-119.4v110.1C224 504.9 231.1 512 240 512l31.98-.002c8.876 0 16.02-7.146 16.02-16.02l.002-166.5 56.01-49.5L232 167.1 6.73 423.1zM478.5 33.47c-44.75-44.63-117.3-44.63-162 0l-2.125 2.25 161.9 161.9 2.251-2.125C523.2 150.7 523.2 78.22 478.5 33.47z" />
  </svg>
);

const SvgMicrophoneStandSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMicrophoneStandSolid;
