import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="m219.9 266.7-144.01 160c-5.906 6.562-16.03 7.094-22.59 1.188-6.918-6.271-6.783-16.39-1.188-22.62L186.5 256 52.11 106.7c-5.88-6.6-5.36-16.66 1.18-22.6 6.57-5.9 16.69-5.37 22.6 1.19l144 159.1c5.51 7.01 5.51 16.21.01 22.31z" />
  </svg>
);

const SvgAngleRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAngleRight;
