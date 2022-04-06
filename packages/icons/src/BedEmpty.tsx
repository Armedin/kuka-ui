import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528 192H32V48c0-8.8-7.2-16-16-16S0 39.2 0 48v416c0 8.8 7.199 16 16 16s16-7.2 16-16v-48h576v48c0 8.801 7.199 16 16 16s16-7.199 16-16V304c0-61.9-50.1-112-112-112zm80 192H32v-32h576v32zm0-64H32v-96h496c44.1 0 80 35.9 80 80v16z" />
  </svg>
);

const SvgBedEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBedEmpty;
