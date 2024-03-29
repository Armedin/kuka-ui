import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48zm-54.5 64L192 198.3 102.5 64h179zM64 121.7 153.5 256 64 390.3V121.7zM102.5 448 192 313.7 281.5 448h-179zM320 390.3 230.5 256 320 121.7v268.6z" />
  </svg>
);

const SvgNotdefSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNotdefSolid;
