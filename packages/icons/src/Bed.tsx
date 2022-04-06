import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528 128H272c-8.8 0-16 7.2-16 16v176H32V48c0-8.8-7.2-16-16-16S0 39.2 0 48v416c0 8.8 7.199 16 16 16s16-7.2 16-16v-48h576v48c0 8.801 7.199 16 16 16s16-7.199 16-16V240c0-61.9-50.1-112-112-112zm80 256H32v-32h576v32zm0-64H288V160h240c44.1 0 80 35.9 80 80v80zm-464-32c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.88 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48z" />
  </svg>
);

const SvgBed = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBed;
