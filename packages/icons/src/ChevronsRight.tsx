import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m212.2 58.86 181.1 197.1L212.2 453.1a15.943 15.943 0 0 0-4.25 10.86c0 4.312 1.719 8.609 5.156 11.75 6.5 6 16.59 5.594 22.59-.89l192-208a15.956 15.956 0 0 0 0-21.72l-192-208c-6-6.485-16.09-6.892-22.59-.891C206.6 42.22 206.2 52.36 212.2 58.86zm23.6 208.04a15.956 15.956 0 0 0 0-21.72l-192-208c-6-6.484-16.09-6.891-22.59-.89-6.531 5.968-6.906 16.11-.906 22.61l181.1 197.1L20.26 453.1a15.943 15.943 0 0 0-4.25 10.86c0 4.312 1.719 8.609 5.156 11.75 6.5 6 16.59 5.594 22.59-.89L235.8 266.9z" />
  </svg>
);

const SvgChevronsRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChevronsRight;
