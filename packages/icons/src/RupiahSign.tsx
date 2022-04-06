import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 80c0-26.51 21.49-48 48-48h64c79.5 0 144 64.47 144 144 0 65.6-43.9 120.1-103.9 138.3l54 144c4 8.3-1 17.5-8.4 19.8-8.3 4-17.5-1-20.7-8.4l-57.1-149.9c-2.6.1-5.2.2-7.9.2H32v144c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V80zm32 208h80c61.9 0 112-50.1 112-112S173.9 64 112 64H48c-8.84 0-16 7.16-16 16v208zm368-128c61.9 0 112 50.1 112 112s-50.1 112-112 112h-80v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-26.5 21.5-48 48-48h64zm-80 192h80c44.2 0 80-35.8 80-80s-35.8-80-80-80h-64c-8.8 0-16 7.2-16 16v144z" />
  </svg>
);

const SvgRupiahSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRupiahSign;
