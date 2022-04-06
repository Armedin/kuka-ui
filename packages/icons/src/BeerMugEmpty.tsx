import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M144 128c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm128 0c-8.8 0-16 7.2-16 16v224c0 8.844 7.156 16 16 16s16-7.156 16-16V144c0-8.8-7.2-16-16-16zm-64 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm224-32h-48V80c0-26.51-21.5-48-48-48H80c-26.51 0-48 21.49-48 48v304c0 53.02 42.98 96 96 96h160c53.02 0 96-43.06 96-96.08v-6.02l83.8-41.9c27.3-13.6 44.2-41.9 44.2-71.5V176c0-44.1-35.9-80-80-80zm-80 288c0 35.29-28.71 64-64 64H128c-35.29 0-64-28.71-64-64V80c0-8.82 7.18-16 16-16h256c8.8 0 16 7.18 16 16v304zm128-119.5c0 18.3-10.16 34.73-26.53 42.92L384 342.1V128h48c26.5 0 48 21.5 48 48v88.5z" />
  </svg>
);

const SvgBeerMugEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBeerMugEmpty;
