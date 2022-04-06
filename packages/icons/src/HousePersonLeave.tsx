import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M340.7 107.3c6.477-6.479 6.186-17.07-.64-23.18L250.5 4.031c-6-5.25-15-5.25-21 0l-223.1 196c-6.625 5.875-7.375 15.88-1.5 22.62 5.75 6.625 15.88 7.25 22.5 1.5l37.5-32.88.01 176.7c0 26.51 21.49 48 47.1 48l176.1.016c8.814 0 15.96-7.145 15.96-15.96s-7.146-16.04-15.96-16.04H111.1c-8.836 0-16-7.162-15.1-16L95.1 163.4 238.2 37.3l78.73 70.66c8.07 5.64 17.77 5.34 23.77-.66zM181.3 160c-11.88 0-21.38 9.625-21.38 21.38v85.25c0 11.75 9.625 21.38 21.38 21.38h85.25c11.75 0 21.38-9.5 21.38-21.38V181.4c0-11.88-9.625-21.38-21.38-21.38H181.3zm73.8 96h-64v-64h64v64zm182.4 96.1c-8.281-3.031-17.47 1.188-20.55 9.484l-21.87 59.41-69.75 62.19c-6.607 5.875-7.186 15.98-1.297 22.58C327.2 510.2 331.6 512 336 512c3.797 0 7.594-1.344 10.64-4.062l72.73-64.84a15.77 15.77 0 0 0 4.375-6.406l23.27-63.16C450.1 365.2 445.8 356 437.5 352.1zm196.1-76.9L575.1 232v-30.4c0-31.64-23.62-58.89-54.95-63.36l-46.37-6.625c-18.78-2.656-37.94-.36-55.5 6.656l-26.72 10.69c-23.8 9.516-41.7 30.03-47.91 54.89l-8.062 32.25c-2.156 8.562 3.062 17.25 11.64 19.39 8.5 2.078 17.23-3.062 19.39-11.64l8.062-32.25c3.734-14.91 14.48-27.22 28.75-32.92l26.72-10.69c4.969-1.988 10.21-3.051 15.45-3.963l-20.16 80.54c-7.484 30.03 3.188 62.02 27.2 81.52l79.12 64.23a16.061 16.061 0 0 1 5.531 8.953l22.17 100.2C562 506.9 568.6 512 575.1 512c1.141 0 2.312-.125 3.469-.375 8.641-1.906 14.08-10.45 12.17-19.08l-22.17-100.2c-2.344-10.55-8.25-20.09-16.62-26.88l-79.11-64.23c-14.41-11.7-20.81-30.91-16.33-48.92l21.93-87.7 37.19 5.312c15.67 2.234 27.48 15.84 27.48 31.67V240c0 5.031 2.375 9.781 6.406 12.8l63.1 48c4.685 1.3 7.985 3.2 10.485 3.2 4.875 0 9.672-2.203 12.81-6.406 6.19-7.094 4.79-17.094-2.31-22.394zM535.1 112c30.88 0 56-25.12 56-56s-24.2-56-56-56S480 25.12 480 56s25.1 56 55.1 56zm0-80c13.23 0 24 10.77 24 24s-10.77 24-24 24-24-10.77-24-24 11.7-24 24-24z" />
  </svg>
);

const SvgHousePersonLeave = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHousePersonLeave;
