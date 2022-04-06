import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M600 32c15.9 0 30.2 9.39 36.6 23.93 6.4 14.53 3.6 31.47-7.2 43.15L480 261.5V416c0 12.1-6.8 23.2-17.7 28.6-10.8 5.4-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V261.5L202.6 99.08c-10.8-11.68-14.5-28.62-7.2-43.15C201.7 41.39 216.1 32 231.1 32H600zM39.99 96H164.1c3.2 9 8.2 17.4 14.9 24.7l141 152.4v17.6l-32 34.8V448c0 12.1-6.8 23.2-17.7 28.6-10.8 5.4-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-74.5L10.55 163.1c-10.747-11.7-13.569-28.6-7.19-43.2A40.035 40.035 0 0 1 39.99 96z" />
  </svg>
);

const SvgFiltersSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFiltersSolid;
