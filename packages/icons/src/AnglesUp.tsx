import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M42.73 235.9 192 101.5l149.3 134.4c6.23 5.596 16.35 5.73 22.62-1.188 5.906-6.562 5.375-16.69-1.188-22.59l-159.1-144a16.06 16.06 0 0 0-21.44 0L21.29 212.1c-6.56 5.9-7.09 16-1.19 22.6 5.94 6.6 16.03 7.1 22.63 1.2zm159.97 24.2a16.06 16.06 0 0 0-21.44 0l-159.97 144c-6.562 5.906-7.094 16.03-1.188 22.59 5.938 6.549 16.03 7.064 22.62 1.188L192 293.5l149.3 134.4c6.23 5.596 16.35 5.73 22.62-1.188 5.906-6.562 5.375-16.69-1.188-22.59L202.7 260.1z" />
  </svg>
);

const SvgAnglesUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAnglesUp;
