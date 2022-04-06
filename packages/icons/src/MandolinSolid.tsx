import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m507.3 50.66-46-46c-5.25-5.249-13.38-6.126-19.76-2.252l-64 40.11c-7 4.374-12 11.12-14 19.12l-14.5 56.1L274.5 192.2c-184.12-1.6-228.49 47.9-243.74 64-46.88 46.87-39.5 150.4 17.5 207.5 57.13 57.12 160.6 64.37 207.5 17.5 15.25-15.25 65.64-59.64 64.01-243.7l74.5-74.49 56.12-14.49c7.875-1.1 14.75-7.125 19.12-13.1l40.01-63.99c3.98-7.28 3.08-15.4-2.22-20.77zM208 351.1c-26.5 0-48-21.5-48-47.99 0-26.5 21.5-47.99 48-47.99s48 21.5 48 47.99c0 27.39-21.5 47.99-48 47.99z" />
  </svg>
);

const SvgMandolinSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMandolinSolid;
