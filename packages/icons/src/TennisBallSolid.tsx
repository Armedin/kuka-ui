import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M363.1 319.8c-48.7 34.11-74.45 88.51-74.45 143.8 0 15.11 1.922 30.29 5.823 45.15 110.6-16.7 197.9-104 214.4-214.7-14.72-3.875-29.85-6.031-45.1-6.031C428.9 288.1 393.7 298.4 363.1 319.8zM49.59 223.3c110.6 0 173.8-93.19 173.8-174.1 0-15.12-1.924-30.31-5.828-45.17-110.4 16.67-197.5 103.7-214.3 214.1 15.088 3.17 30.688 5.17 46.328 5.17zM255.1-.003c-1.928 0-3.793.244-5.711.287C253.1 15.98 255.8 31.95 255.8 47.85c0 97.43-76.7 208.1-207.5 208.1-16.18 0-32.29-1.914-48-5.613-.041 1.902-.285 3.756-.285 5.67 0 141.4 114.6 256 256 256 1.932 0 3.797-.248 5.719-.291a208.395 208.395 0 0 1-5.488-47.55c0-96.97 76.25-207.9 207.1-207.9 16.3 0 32.55 1.9 48.39 5.63.045-1.976.299-3.895.299-5.88C511.1 114.6 397.4-.004 255.1-.004z" />
  </svg>
);

const SvgTennisBallSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTennisBallSolid;
