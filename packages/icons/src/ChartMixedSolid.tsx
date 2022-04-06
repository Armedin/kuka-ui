import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M339.1 216.1c-10.5 10-26.6 10.3-38.3 1.5l-108.2-81.1L51.99 248.1c-13.8 11.9-33.94 9.7-44.977-5-11.041-12.9-8.803-33 4.997-44.1L172 71.01c11.4-9.11 27.5-9.36 39.2-.61l108.2 81.1L460 39.01c13.8-11.04 33.9-8.8 44.1 5 11.9 13.8 9.7 33.94-5 44.98l-160 127.11zM160 256c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32V256zM32 352c0-17.7 14.33-32 32-32s32 14.3 32 32v96c0 17.7-14.33 32-32 32s-32-14.3-32-32v-96zm320-32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32s32 14.3 32 32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32V256z" />
  </svg>
);

const SvgChartMixedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartMixedSolid;
