import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M127.1 256h320c17.6 0 32-14.4 32-32V32c0-17.6-14.4-32-32-32H352v128l-64-32-64.9 32V0h-96c-16.7 0-31.13 14.4-31.13 32v192c0 17.6 14.43 32 31.13 32zm441.1 80.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.1s7.25-15.1 15.1-15.1h78.25c15.1 0 30.75-10.88 33.37-26.62 3.25-19.1-12.12-37.37-31.62-37.37H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1c-8.748 0-15.1 7.274-15.1 16.02V496c0 8.8 7.251 16 15.1 16h346.1c22.03 0 43.92-7.188 61.7-20.28L558 392.2c19.5-13.1 23.3-38.1 10.2-55.9z" />
  </svg>
);

const SvgHandHoldingBoxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandHoldingBoxSolid;
