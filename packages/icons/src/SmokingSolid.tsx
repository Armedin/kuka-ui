import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M432 352H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h384c8.75 0 16-7.25 16-16V368c0-8.7-7.2-16-16-16zm-32 112H224v-64h176v64zm136-112h-48c-4.4 0-8 3.6-8 8v144c0 4.375 3.625 8 8 8h48c4.375 0 8-3.625 8-8V360c0-4.4-3.6-8-8-8zm96 0h-48c-4.4 0-8 3.6-8 8v144c0 4.375 3.625 8 8 8h48c4.375 0 8-3.625 8-8V360c0-4.4-3.6-8-8-8zM553.3 87.13c-5.7-3.88-9.3-10.01-9.3-16.88V8c0-4.375-3.6-8-8-8h-48c-4.4 0-8 3.625-8 8v62.25c0 22 10.25 43.5 28.62 55.5C550.8 153 576 199.5 576 249.8V280c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-30.2c0-65.5-32.4-126.3-86.7-162.67zm-65.5 54.47C463.8 125 448 99.25 448 70.25V8c0-4.375-3.6-8-8-8h-48c-4.4 0-8 3.625-8 8v66.38c0 43.72 24.6 81.62 60.3 106.72 22.5 15.7 35.7 41.2 35.7 68.7V280c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-30.2c0-43.4-21-83.5-56.2-108.2z" />
  </svg>
);

const SvgSmokingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSmokingSolid;
