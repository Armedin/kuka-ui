import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M320 320H128c-17.62 0-32 14.38-32 32v32h256v-32c0-17.6-14.4-32-32-32zM96 512h256v-96H96v96zM320 80h-8V56c0-30.88-25.1-56-56-56h-64c-30.9 0-56 25.12-56 56v24h-8C57.25 80 0 137.25 0 208v240c0 35.38 28.62 64 64 64V352c0-35.25 28.75-64 64-64h192c35.25 0 64 28.75 64 64v160c35.38 0 64-28.62 64-64V208c0-70.8-57.2-128-128-128zM184 56c0-4.38 3.6-8 8-8h64c4.375 0 8 3.625 8 8v24h-80V56zm136 144c0 4.375-3.625 8-8 8H136c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z" />
  </svg>
);

const SvgBackpackSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBackpackSolid;
