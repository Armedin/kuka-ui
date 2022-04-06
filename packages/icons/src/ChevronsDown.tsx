import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M421.1 244.2 224 426.2 26.9 245.1c-3.12-3.7-7.01-6-10.9-6-4.312 0-8.609 1.719-11.75 5.156-6 6.5-5.594 16.59.89 22.59l208 192a15.956 15.956 0 0 0 21.72 0l208-192c6.485-6 6.892-16.09.891-22.59C437.8 238.6 427.6 238.2 421.1 244.2zm-208 23.6a15.956 15.956 0 0 0 21.72 0l208-192c6.484-6 6.891-16.09.89-22.59-5.968-6.531-16.11-6.906-22.61-.906L224 234.2 26.86 52.26A15.92 15.92 0 0 0 16 48.01c-4.312 0-8.609 1.719-11.75 5.156-6 6.5-5.594 16.59.89 22.59L213.1 267.8z" />
  </svg>
);

const SvgChevronsDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChevronsDown;
