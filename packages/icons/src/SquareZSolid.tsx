import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-88 352H152a23.958 23.958 0 0 1-21.25-12.86 23.945 23.945 0 0 1 1.531-24.8L250.2 176H152c-13.2 0-24-10.7-24-24s10.8-24 24-24h144c8.938 0 17.12 4.953 21.25 12.86a23.945 23.945 0 0 1-1.531 24.8L197.8 336H296c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgSquareZSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareZSolid;
