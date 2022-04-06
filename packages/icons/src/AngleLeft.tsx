import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M203.9 405.3c5.877 6.594 5.361 16.69-1.188 22.62-6.562 5.906-16.69 5.375-22.59-1.188L36.1 266.7a16.06 16.06 0 0 1 0-21.44l144-159.1c5.906-6.562 16.03-7.094 22.59-1.188 6.918 6.271 6.783 16.39 1.188 22.62L69.53 256 203.9 405.3z" />
  </svg>
);

const SvgAngleLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAngleLeft;
