import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M224.3 167.2c.25-2.123 1.375-4.121 3-5.371 1.75-1.248 3.875-1.873 6-1.498l15.88 2.123c2 .25 4 1.373 5.25 2.998 1.17 1.748 1.87 3.948 1.57 6.048l-24.12 180.6H496l-25-199.8c-4-31.97-31.25-56.06-63.5-56.06h-175c-32.25 0-59.5 24.08-63.5 56.06l-25 199.8h55.5l24.8-184.9zm311.7-55c4.75 0 9.375-1.374 13.25-3.997l48-31.98c7.375-4.621 11.62-12.76 11.12-21.5-.5-8.744-5.625-16.49-13.5-20.23-7.75-3.748-17-2.998-24.12 1.873l-48 31.97c-8.875 5.871-12.75 16.76-9.625 26.88C516.1 105.2 525.5 112.2 536 112.2zm-445.25-4c7.13 5 16.35 5.9 24.25 2 7.9-3.8 13-11.5 13.5-20.25.5-8.74-3.7-16.88-11.2-21.5l-48-31.97c-7.17-5.13-16.42-5.88-24.3-2.13-7.87 3.87-13 11.62-13.5 20.36s3.75 16.88 11.25 21.5l48 31.99zM112 224.1c0-13.24-10.75-23.99-24-23.99H24c-13.25 0-24 10.71-24 23.95s10.75 24.03 24 24.03h64c13.3.01 24-10.69 24-23.99zm504-24h-64c-13.25 0-24 10.75-24 23.99s10.75 23.99 24 23.99h64c13.25 0 24-10.79 24-24.03s-10.7-23.95-24-23.95zm-88 184H112c-8.875 0-16 7.119-16 15.99v63.95c0 8.86 7.1 15.96 16 15.96h416c8.875 0 16-7.119 16-15.99v-63.95c0-8.86-7.1-15.96-16-15.96z" />
  </svg>
);

const SvgSirenOnSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSirenOnSolid;
