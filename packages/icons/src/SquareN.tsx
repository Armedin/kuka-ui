import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-96-288c-8.844 0-16 7.156-16 16v180.8L140.1 133.6c-4.3-5.1-11.4-7-17.6-4.6-6.3 2.3-10.5 8.3-10.5 15v224c0 8.8 7.2 16 16 16s16-7.156 16-16V187.3l163.9 191.2c2.2 3.5 7.5 5.5 12.1 5.5 1.859 0 3.734-.328 5.547-1C331.8 380.7 336 374.7 336 368V144c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgSquareN = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareN;
