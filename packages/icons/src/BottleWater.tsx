import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M96 240c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16zm112 112c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96zM96 102.3V24c0-13.25 10.7-24 24-24h80c13.3 0 24 10.75 24 24v78.3c6.4 2.4 12.6 5.5 18.4 9.2l13.5 8.6c20 12.8 32.1 34.8 32.1 58.5 0 10.9-2.5 21.2-7.9 30.4 5.4 9.4 7.9 19.9 7.9 31 0 11.5-2.7 22.4-7.5 32 4.8 9.6 7.5 20.5 7.5 32s-2.7 22.4-7.5 32c4.8 9.6 7.5 20.5 7.5 32 0 13.1-3.5 25.4-9.6 36 6.1 10.6 9.6 22.9 9.6 36 0 39.8-32.2 72-72 72H104c-39.76 0-72-32.2-72-72 0-13.1 3.51-25.4 9.64-36-6.13-10.6-9.64-22.9-9.64-36 0-11.5 2.7-22.4 7.49-32-4.79-9.6-7.49-20.5-7.49-32s2.7-22.4 7.49-32C34.7 262.4 32 251.5 32 240c0-11.1 2.52-21.6 7-31-4.48-9.2-7-19.5-7-30.4 0-23.7 12.1-45.7 32.08-58.5l13.55-8.6c5.82-3.7 11.98-6.8 18.37-9.2zm96-6.3V32h-64v64h64zm-61.3 32c-13.6 0-25.2 3.6-35.86 10.5l-13.55 8.6C70.52 153.1 64 165.8 64 178.6c0 5.3 1.09 10.3 3.07 14.9 2.63 6 6.82 11.3 12.07 15.2-5.46 4.3-9.77 10-12.37 16.6-1.79 4.6-2.77 9.5-2.77 14.7 0 4.1.91 9.7 2.56 14.1 2.71 7.2 7.41 13.4 12.54 17.9-5.13 4.5-9.83 10.7-12.54 17.9A39.87 39.87 0 0 0 64 304c0 4.1.91 9.7 2.56 14.1 2.71 7.2 7.41 13.4 12.54 17.9-5.13 4.5-9.83 10.7-12.54 17.9A39.87 39.87 0 0 0 64 368c0 3.9.55 7.6 1.56 11.1 3.17 11 10.89 20 20.98 24.9-10.09 4.9-17.81 13.9-20.98 24.9-1.01 3.5-1.56 7.2-1.56 11.1 0 22.1 17.91 40 40 40h112c22.1 0 40-17.9 40-40 0-3.9-.5-7.6-1.6-11.1-3.1-11-10.8-20-20.9-24.9 10.1-4.9 17.8-13.9 20.9-24.9 1.1-3.5 1.6-7.2 1.6-11.1 0-5-.9-9.7-2.6-14.1-2.7-7.2-7.4-13.4-13.4-17.9 6-4.5 10.7-10.7 13.4-17.9 1.7-4.4 2.6-10 2.6-15 0-4.1-.9-8.8-2.6-13.2-2.7-7.2-7.4-13.4-13.4-18.8 6-3.6 10.7-9.8 13.4-17 1.7-4.4 2.6-10 2.6-15 0-4.3-1-9.2-2.8-13.8-2.6-6.6-6.9-12.3-12.3-16.6 5.2-3.9 9.4-9.2 12-15.2 2-4.6 3.1-9.6 3.1-14.9 0-12.8-6.5-25.5-17.3-31.5l-13.5-8.6c-10.7-6.9-23.2-10.5-35.9-10.5h-58.6z" />
  </svg>
);

const SvgBottleWater = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBottleWater;
