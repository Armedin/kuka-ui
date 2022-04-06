import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 480H16c-8.875 0-16 7.1-16 16s7.125 16 16 16h480c8.875 0 16-7.125 16-16s-7.1-16-16-16zM16 352h64.38c-7.25-9.375-12.25-20.38-14.75-32H16c-8.875 0-16 7.1-16 16s7.125 16 16 16zm480-32H222.4c-2.5 11.62-7.5 22.62-14.75 32H496c8.875 0 16-7.125 16-16s-7.1-16-16-16zm0-320H16C7.125 0 0 7.125 0 16v64c0 8.88 7.125 16 16 16h112v64H16c-8.875 0-16 7.1-16 16s7.125 16 16 16h112v67c-22.9 7.8-35.25 30.2-31.25 53.2 3.85 23.2 23.85 39.9 47.25 39.9s43.38-16.75 47.25-39.88C195.2 289.2 181.1 266.8 160 259V96h336c8.9 0 16-7.12 16-16V16c0-8.875-7.1-16-16-16zM144 320c-8.9 0-16-7.1-16-16s7.1-16 16-16 16 7.1 16 16-7.1 16-16 16zM480 64H32V32h448v32zm16 96H192v32h304c8.9 0 16-7.1 16-16s-7.1-16-16-16z" />
  </svg>
);

const SvgBlindsOpen = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlindsOpen;
