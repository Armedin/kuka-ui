import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 416H31.1C14.33 416 0 430.3 0 447.1S14.33 480 31.1 480H352c17.7 0 32-14.3 32-32s-14.3-32-32-32zM56 223.8h72v128.1c0 17.69 14.33 32.04 32 32.04h64c17.67 0 32-14.35 32-32.04V223.8h72c9.578 0 18.25-5.708 22.05-14.51 3.781-8.803 1.984-19.03-4.594-26l-136-144.1c-9.062-9.601-25.84-9.601-34.91 0l-136 144.1a24.063 24.063 0 0 0-4.594 26A24.012 24.012 0 0 0 56 223.8z" />
  </svg>
);

const SvgUpFromLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpFromLineSolid;
