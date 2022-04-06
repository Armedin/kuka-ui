import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zM144 288h-32c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm80-160V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm-32 240c0 26.47-21.53 48-48 48h-32c-26.47 0-48-21.5-48-48v-64c0-26.5 21.53-48 48-48h32c26.5 0 48 21.5 48 48v64zm96-96v112h16c8.844 0 16 7.156 16 16s-7.2 16-16 16h-64c-8.844 0-16-7.156-16-16s7.156-16 16-16h16v-96h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgFileBinarySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileBinarySolid;
