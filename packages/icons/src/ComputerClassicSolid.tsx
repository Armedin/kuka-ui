import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 0H32C14.38 0 0 14.38 0 32v368c0 8.875 7.125 16 16 16h416c8.875 0 16-7.125 16-16V32c0-17.62-14.4-32-32-32zM80 356c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm303.1-12c0 4.375-3.625 8-8 8h-144c-4.375 0-8-3.625-8-8l.9-16c0-4.375 3.625-8 8-8h144c4.375 0 8 3.625 8 8l-.9 16zm.9-120c0 17.62-14.38 32-32 32H96c-17.62 0-32-14.4-32-32V96c0-17.62 14.38-32 32-32h256c17.62 0 32 14.38 32 32v128zM32 512h384v-64H32v64z" />
  </svg>
);

const SvgComputerClassicSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgComputerClassicSolid;
