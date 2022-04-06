import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m26.86 267.8 197.1-181.1 197.1 181.1c3.14 2.8 7.04 4.2 10.94 4.2 4.312 0 8.609-1.719 11.75-5.156 6-6.5 5.594-16.59-.89-22.59l-208-192a15.956 15.956 0 0 0-21.72 0l-208 192c-6.485 6-6.892 16.09-.891 22.59 5.971 6.556 16.111 6.956 22.611.956zm208.04-23.6a15.956 15.956 0 0 0-21.72 0l-208 192c-6.484 6-6.891 16.09-.89 22.59 5.968 6.531 16.11 6.906 22.61.906l197.1-181.1 197.1 181.1a15.943 15.943 0 0 0 10.86 4.25c4.311 0 8.608-1.719 11.75-5.156 6-6.5 5.593-16.59-.891-22.59L234.9 244.2z" />
  </svg>
);

const SvgChevronsUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChevronsUp;
