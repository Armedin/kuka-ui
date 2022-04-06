import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 272c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16zm176 80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96zM0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm32 0v64h448V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32zm96 96v48c0 8.8 7.2 16 16 16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-5.6 0-11-1-16-2.7V336c0 8.8 7.2 16 16 16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-26.5 0-48-21.5-48-48V192H32v224c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V192H128z" />
  </svg>
);

const SvgTableTree = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTableTree;
