import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M232 352h-88l.004-192h87.1c9.547 0 18.19-5.656 21.1-14.41s2.078-18.94-4.406-25.92l-104-112C140.8 2.555 134.4-.004 127.1-.004s-11.9 2.559-16.7 7.676l-104 112A24.041 24.041 0 0 0 1.999 145.6C5.814 154.3 14.45 160 24 160h88l-.9 192H24c-9.547 0-18.19 5.656-22 14.41s-2.078 18.94 4.406 25.92l103.1 112c4.75 5.117 11.17 7.668 17.59 7.668s12.85-2.551 17.6-7.668l104-112c6.484-6.984 8.217-17.17 4.407-25.92C250.2 357.7 241.5 352 232 352zM42.34 128 128 35.75 213.7 128H42.34zM128 476.3 42.34 384h171.3L128 476.3z" />
  </svg>
);

const SvgUpDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpDown;
