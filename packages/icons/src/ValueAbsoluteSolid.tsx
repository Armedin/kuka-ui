import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M374.6 137.4c-12.5-12.5-32.75-12.5-45.25 0L256 210.8l-73.4-73.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l73.38 73.37-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25C143.6 380.9 151.8 384 160 384s16.38-3.125 22.62-9.375L256 301.3l73.38 73.38C335.6 380.9 343.8 384 352 384s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-73.38-73.38 73.38-73.37C387.1 170.1 387.1 149.9 374.6 137.4zM32 32.01c-17.67 0-32 14.31-32 32v384c0 17.69 14.33 32 32 32s32-14.31 32-32v-384c0-17.68-14.33-32-32-32zm448 0c-17.67 0-32 14.31-32 32v384c0 17.69 14.33 32 32 32s32-14.31 32-32v-384c0-17.68-14.3-32-32-32z" />
  </svg>
);

const SvgValueAbsoluteSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgValueAbsoluteSolid;
