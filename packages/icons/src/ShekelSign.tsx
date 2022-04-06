import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 32c61.9 0 112 50.14 112 112v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-44.18-35.8-80-80-80H80c-8.84 0-16 7.16-16 16v384c0 8.8-7.16 16-16 16s-16-7.2-16-16V80c0-26.51 21.49-48 48-48h112zm0 448c-26.5 0-48-21.5-48-48V176c0-8.8 7.2-16 16-16s16 7.2 16 16v256c0 8.8 7.2 16 16 16h112c44.2 0 80-35.8 80-80V48c0-8.84 7.2-16 16-16s16 7.16 16 16v320c0 61.9-50.1 112-112 112H192z" />
  </svg>
);

const SvgShekelSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShekelSign;
