import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m447.3 456.1-53.34-320C390.1 112.9 370.2 96 346.6 96h-26.65l.001-48c0-26.47-21.53-48-48-48H176.1c-26.4 0-48 21.53-48 48v48h-26.8c-23.53 0-43.43 16.9-47.29 40.1L.67 456.1C-4.211 485.3 18.31 512 48.02 512h351.9c29.48 0 52.38-26.4 47.38-55.9zM160 48c0-8.812 7.168-16 15.1-16h96c8.828 0 16.01 7.188 16.01 16v48H160V48zm239.1 432H48.02c-12.59 0-16.92-11.82-15.79-18.62l53.34-320C86.85 133.6 93.49 128 101.3 128h245.3c7.859 0 14.5 5.625 15.78 13.38l53.34 320C416.9 468.2 412.7 480 399.1 480z" />
  </svg>
);

const SvgCowbell = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCowbell;
