import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M121.9 241.2c6-2.5 12.8-1.1 17.4 3.5l128 128c4.6 4.6 6 11.4 3.5 17.4-2.5 6-8.3 9.9-14.8 9.9H128c-8.8 0-16-7.2-16-16V256c0-6.5 3.9-12.3 9.9-14.8zm22.1 53.4V368h73.4L144 294.6zM77.26 13.26 498.7 434.7c8.5 8.5 13.3 20 13.3 32 0 25-20.3 45.3-45.3 45.3H64c-35.35 0-64-28.7-64-64V45.25C0 20.26 20.26 0 45.25 0c12.01 0 23.52 4.768 32 13.25l.01.01zM32 45.26V448c0 17.7 14.33 32 32 32h402.7c7.4 0 13.3-5.9 13.3-13.3 0-3.5-1.4-6.8-3.9-9.3l-39.4-39.5-25.4 25.4c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l25.4-25.4-57.4-57.4-25.4 25.4c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l25.4-25.4-57.4-57.36-25.39 25.36c-6.24 6.3-16.37 6.3-22.62 0-6.25-6.2-6.25-16.4 0-22.6l25.37-25.39-39.43-39.43A13.288 13.288 0 0 0 45.26 32C37.94 32 32 37.94 32 45.26z" />
  </svg>
);

const SvgRulerTriangle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRulerTriangle;
