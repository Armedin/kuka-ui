import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M452.8 128H480c17.67 0 32-14.33 32-32V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v48h-64V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v48h-80V32c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v64h-80V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v48H32V48c0-8.84-7.16-16-16-16S0 39.16 0 48v48c0 17.67 14.33 32 32 32h27.16L208 227.2V288h-80v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H32v-48c0-8.8-7.16-16-16-16s-16 7.2-16 16v48c0 17.67 14.33 32 32 32h27.16L208 419.2V496c0 8.8 7.2 16 16 16s16-7.164 16-16V320h32v176c0 8.836 7.164 16 16 16s16-7.164 16-16v-76.77L452.8 320H480c17.67 0 32-14.33 32-32v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-80v-60.8L452.8 128zM304 128h91.16L304 188.8V128zm-64-96h32v64h-32V32zm-123.2 96H208v60.78L116.8 128zM208 380.8 116.8 320H208v60.8zM395.2 320 304 380.8V320h91.2zM240 288V128h32v160h-32z" />
  </svg>
);

const SvgUtilityPoleDouble = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUtilityPoleDouble;
