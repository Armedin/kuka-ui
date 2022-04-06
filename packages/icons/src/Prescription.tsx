import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m310.6 352 100.7-100.7c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L288 329.4 182.6 224h9.4c52.94 0 96-43.06 96-96s-43.06-96-96-96H80c-26.47 0-48 21.53-48 48v224c0 8.8 7.16 16 16 16s16-7.2 16-16v-80h73.38l128 128-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62C167.8 478.4 171.9 480 176 480s8.188-1.562 11.31-4.688L288 374.6l100.7 100.7c3.1 3.1 7.2 4.7 11.3 4.7s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L310.6 352zM64 80c0-8.81 7.17-16 16-16h112c35.3 0 64 28.72 64 64s-28.7 64-64 64H64V80z" />
  </svg>
);

const SvgPrescription = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPrescription;
