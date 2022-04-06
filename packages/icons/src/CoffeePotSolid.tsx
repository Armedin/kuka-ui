import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M431.5 177.6 480 32H88C39.38 32 0 71.38 0 120v88c0 8.9 7.125 16 16 16h32c8.88 0 16-7.1 16-16v-72c0-22.1 17.88-40 40-40h13.38l27.38 82.13C95.38 217.9 64 277.8 64 344.6c0 51.5 18.62 84.74 49.62 117.7C124.5 473.6 139.5 480 155.1 480h265.8c15.62 0 30.57-6.192 41.32-17.57C493.2 429.6 512 396.1 512 344.6c0-66.2-30.6-126.7-80.5-167zM445.9 320H130.6c6.75-39 28.88-72.88 60.5-96h195.8c30.2 23.2 52.6 57.2 59 96z" />
  </svg>
);

const SvgCoffeePotSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoffeePotSolid;
