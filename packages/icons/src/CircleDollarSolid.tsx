import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm276.8-122.4c0-11.9-9.7-21.6-21.6-21.6-11.9 0-21.6 9.7-21.6 21.6v16.1c-6.1 1.4-12 2.4-17.5 5.7-18 7.7-35 22.2-39 44-4.2 23.1 5.8 43.9 25.3 56.4 14.2 9.1 33 14.4 48.1 18.7 2.2.6 3.6 1.2 6.8 1.9 11.9 3.2 24.4 5.7 34.5 13.5 11.7 8 6.1 22.2-5.9 26.2-8.9 4.5-22.5 6-39.5 3.5-11.6-1.8-23.2-5.8-34.5-9.6-2.5-.8-5-1.7-7.5-2.5-11.3-3.8-23.6 2.4-27.3 13.7-3.8 11.3 2.4 23.6 13.7 27.3 14.1 4.6 28.3 9.3 42.8 12.5v17.4c0 11.9 9.7 21.6 21.6 21.6 11.9 0 21.6-9.7 21.6-21.6v-15.2c8.9-1 17.4-3 25.2-6.2 18.8-7.5 34.3-22.2 38.5-44.6 4.2-23.2-4.9-44.9-24.3-58.2-14.9-10.2-34.8-15.8-50.4-20.3-2.3-.6-4.7-1.3-7-2.8-11.4-2.2-23.3-5.4-33.2-11.7-12.5-8-3.4-19.6 7.6-24.4 12.4-5.3 27.7-6.5 40.9-4 7.1 1.4 14.1 3.4 21.1 5.3 1.5.5 3.1.9 4.6 1.3 11.5 3.2 23.4-3.5 26.6-15 3.2-11.5-3.6-23.4-15.1-27.5-1.8.4-3.7-.2-5.5-.7-9.6-2.7-19.3-5.4-29-6.6v-14.2z" />
  </svg>
);

const SvgCircleDollarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleDollarSolid;