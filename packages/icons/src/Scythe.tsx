import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m639.7 19.12-96 480C542.2 506.8 535.5 512 528 512c-1.031 0-2.094-.094-3.156-.313-8.656-1.719-14.28-10.16-12.55-18.81L543.7 336H400c-8.844 0-16.02-7.156-16.02-16s7.22-16 16.02-16h150.1l54.4-271.1-267.1-.9C222.2 32 113.3 86.53 46.28 176h465.7c8.844 0 16 7.156 16 16s-7.156 16-16 16H16a15.996 15.996 0 0 1-13.59-24.439C72.72 70.34 201.1 0 337.4 0c0 0 251.1.063 286.6 0 4.797 0 9.344 2.156 12.38 5.844a16.223 16.223 0 0 1 3.32 13.276z" />
  </svg>
);

const SvgScythe = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScythe;
