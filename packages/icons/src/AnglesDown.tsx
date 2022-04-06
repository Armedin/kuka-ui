import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M181.3 251.9a16.06 16.06 0 0 0 21.44 0l159.1-144c6.562-5.906 7.094-16.03 1.188-22.59-5.938-6.549-16.03-7.064-22.62-1.188L192 218.5 42.73 84.11c-6.23-5.6-16.35-5.73-22.63 1.18-5.9 6.57-5.37 15.81 1.19 22.61l160.01 144zm160 24.2L192 410.5 42.73 276.1c-6.23-5.6-16.35-5.7-22.63 1.2-5.9 6.6-5.37 15.8 1.19 22.6l159.1 144a16.06 16.06 0 0 0 21.44 0l159.1-144c6.562-5.906 7.094-16.03 1.188-22.59-5.018-6.61-14.218-7.11-20.818-1.21z" />
  </svg>
);

const SvgAnglesDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAnglesDown;
