import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M328 288.2h-72V160.1c0-17.69-14.33-32.04-32-32.04h-64c-17.67 0-32 14.35-32 32.04v128.1H56c-9.578 0-18.25 5.709-22.05 14.51-3.781 8.803-1.984 19.03 4.594 26l136 144.1c9.062 9.602 25.84 9.602 34.91 0l136-144.1c6.578-6.973 8.375-17.2 4.594-26C346.3 293.9 337.6 288.2 328 288.2zM351.1 32h-320C14.33 32 0 46.33 0 63.1 0 81.67 14.33 96 32 96h320c17.7 0 32-14.33 32-32s-14.3-32-32.9-32z" />
  </svg>
);

const SvgDownFromLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDownFromLineSolid;
