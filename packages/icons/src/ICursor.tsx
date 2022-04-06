import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M256 496c0 8.844-7.156 16-16 16-48.52 0-90.29-27.43-112-67.31C106.3 484.6 64.52 512 16 512c-8.844 0-16-7.2-16-16s7.156-16 16-16c52.94 0 96-43.06 96-96V272H64c-8.84 0-16-7.2-16-16s7.16-16 16-16h48V128c0-52.94-43.06-96-96-96-8.844 0-16-7.16-16-16S7.156 0 16 0c48.52 0 90.3 27.43 112 67.31C149.7 27.43 191.5 0 240 0c8.8 0 16 7.156 16 16s-7.2 16-16 16c-52.94 0-96 43.06-96 96v112h48c8.844 0 16 7.156 16 16s-7.2 16-16 16h-48v112c0 52.94 43.06 96 96 96 8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgICursor = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgICursor;
