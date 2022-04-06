import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M363.9 330.7c-6.271 6.918-16.39 6.783-22.62 1.188L192 197.5 42.7 331.9c-6.594 5.877-16.69 5.361-22.62-1.188C14.2 324.1 14.73 314 21.29 308.1l159.1-144a16.06 16.06 0 0 1 21.44 0l159.1 144c8.37 5.9 8.87 16 2.97 22.6z" />
  </svg>
);

const SvgAngleUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAngleUp;
