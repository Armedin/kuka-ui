import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 64c0-8.84 7.163-16 15.1-16H432c8.8 0 16 7.16 16 16s-7.2 16-16 16H15.1C7.163 80 0 72.84 0 64zm191.1 128c0-8.8 8.1-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H207.1c-7.9 0-16-7.2-16-16zM432 304c8.8 0 16 7.2 16 16s-7.2 16-16 16H207.1c-7.9 0-16-7.2-16-16s8.1-16 16-16H432zM0 448c0-8.8 7.163-16 15.1-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H15.1C7.163 464 0 456.8 0 448zm121-204.4c7.8 6.4 7.8 17.5 0 24.8l-94.83 78C15.73 355-.001 347.6-.001 334.1V177.9c0-13.5 15.731-21.8 26.171-12.3l94.83 78zm-89.9 56.6L85.66 256 31.1 211.8v88.4z" />
  </svg>
);

const SvgIndent = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIndent;
