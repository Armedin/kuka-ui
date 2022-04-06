import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M287.1 256c53 0 95.1-42.13 95.1-93.1 0-40-57.12-120.8-83.25-155.6-6.375-8.5-19.12-8.5-25.5 0C249.1 41.25 191.1 122 191.1 162c0 51.9 43 94 96 94zm281.1 80.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99 0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62 3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74-55.38-.901c-8.748 0-15.1 7.274-15.1 16.02V496c0 8.8 7.251 16 15.1 16h346.1c22.03 0 43.92-7.188 61.7-20.27L558 392.21c19.5-13.11 23.3-38.11 10.2-55.91z" />
  </svg>
);

const SvgHandHoldingDropletSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandHoldingDropletSolid;
