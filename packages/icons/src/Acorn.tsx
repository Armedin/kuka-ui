import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m352 64.04-106.6-.006c4.447-13.69 11.63-26.44 21.9-36.72 6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0C228.4 21 217.2 41.76 211.9 64.03L96 64.04C43 64.04.9 107.01.9 160.01L0 176c0 17.62 14.38 32 32 32v16c0 98 55.38 187.8 143.1 231.5L224 480l48.88-24.5C360.6 411.8 416 322 416 224v-16c17.62 0 32-14.38 32-32l-.001-16.01C447.1 107 405 64.04 352 64.04zM384 224c0 86.5-48 164.3-125.4 202.9L224 444.3l-34.63-17.38C112 388.3 64 310.5 64 224v-16h320v16zm32-48H32v-16c0-35.25 28.75-64 64-64h256c35.25 0 64 28.75 64 64v16z" />
  </svg>
);

const SvgAcorn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAcorn;
