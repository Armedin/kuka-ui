import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 0c17.7 0 32 14.33 32 32v96H64V32C64 14.33 78.33 0 96 0zm192 0c17.7 0 32 14.33 32 32v96h-64V32c0-17.67 14.3-32 32-32zm64 160c17.7 0 32 14.3 32 32 0 2.3-.3 4.6-.7 6.8C309.8 219.1 256 287.7 256 368c0 11.4 1.1 22.5 3.1 33.3-11 5.1-22.8 9-35.1 11.5V512h-64v-99.2C86.97 397.1 32 333.4 32 256v-32c-17.67 0-32-14.3-32-32s14.33-32 32-32h320zm-64 208c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm176.8-81.6-96 72c-4.1 3.1-6.7 8.5-4.2 13.4 1.6 4.9 6.2 8.2 11.4 8.2h35.6l-30.1 54.2c-2.7 4.9-1.7 11.1 2.6 14.8 4.3 3.8 10.6 3.1 15.1.6l96-72c4.1-3.1 5.8-8.5 4.2-13.4-1.6-4.9-6.2-8.2-11.4-8.2h-35.6l30.1-54.2c2.7-4.9 1.7-11.1-2.6-15.7-4.3-2.9-10.6-3.1-15.1.3z" />
  </svg>
);

const SvgPlugCircleBoltSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlugCircleBoltSolid;
