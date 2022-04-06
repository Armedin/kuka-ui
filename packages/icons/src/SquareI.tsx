import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-96-272c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h64.88c-.38 1.4-.88 2.8-.88 4.4v183.3c0 1.5.5 2.9.9 4.3H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16h-64.88c.38-1.4.88-2.8.88-4.4V164.4c0-1.6-.5-3-.9-4.4H304c8.8 0 16-7.2 16-16z" />
  </svg>
);

const SvgSquareI = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareI;
