import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M432 160c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm96 0c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm-155.5-54.2C385.4 63.09 425.1 32 472 32c44.4 0 82.2 27.78 97.2 66.89l47.7 31.81c7.3 4.9 9.3 14.8 4.4 22.2-4.9 7.3-14.8 9.3-22.2 4.4L576 141.9V208c0 53-43 96-96 96h-16c-53.9 0-96-43-96-96v-60.8l-15.1 10.1c-7.4 4.9-17.3 2.9-22.2-4.4-4.9-7.4-2.9-17.3 4.4-22.2l37.4-24.9zM472 64c-36.1 0-66 26.56-71.2 61.2l.1.1-.1.1c-.5 3.4-.8 7-.8 10.6v72c0 35.3 28.7 64 64 64h16c35.3 0 64-28.7 64-64v-72c0-39.76-32.2-72-72-72zm-56 280c9.9 0 18.8-4.5 24.7-11.6 10 2.3 20.5 3.6 31.3 3.6 1.1 0 2.2-.9 3.4-.9-8.7 22.4-28.8 38.1-52.8 40.6l-25 99.9C392.2 497 373 512 351 512h-15c-26.5 0-48.9-21.5-48.9-48v-40.6c-8.5 5.5-19.4 8.6-32 8.6-10.8 0-21.7-3.1-32-8.6V464c0 26.5-20.6 48-48 48h-15c-22 0-40.3-15-45.7-36.4l-24.98-99.9C57.17 372.4 32 345.1 32 312c0-5.3.66-10.5 1.89-15.5C13.72 285.7 0 264.5 0 240s13.72-45.7 33.89-56.5c-1.23-5-1.89-10.2-1.89-15.5 0-35.3 28.65-64 64-64 3.34 0 6.6.3 9.8.8C112.7 76.77 137.9 56 168 56c15 0 28.9 5.19 39.8 13.88C219.5 56.47 236.8 48 256 48c19.2 0 36.5 8.47 48.2 21.88C315.1 61.19 328.1 56 344 56c5.7 0 11.2.74 16.5 2.14-6.4 9.19-11.8 19.21-15.8 29.87L344 88c-7.6 0-14.4 2.58-19.9 6.93-13.4 10.67-32.7 8.87-44-3.98-5.9-6.76-14.5-10.95-25-10.95-8.7 0-17.3 4.19-23.2 10.95-11.3 12.85-30.6 14.65-44 3.98-5.5-4.35-12.3-6.93-20.8-6.93-15 0-26.8 10.35-30.2 24.3-4.8 16.2-19.5 26.6-36.8 24.1-.74-.3-2.4-.4-5-.4-16.77 0-32 14.3-32 32 0 2.7 1.23 5.3 1.84 7.8 3.55 14.2-3.04 29-15.97 35.9C38.8 217.2 31.1 227.8 31.1 240s7.7 22.8 17.87 28.3c12.93 6.9 19.52 20.8 15.97 35.9-.61 2.5-1.84 5.1-1.84 7.8 0 17.7 15.23 32 32 32 2.6 0 4.26-.1 5-.4 17.3-2.5 32 7.9 36.8 24.1 3.4 13.9 15.2 24.3 30.2 24.3 8.5 0 15.3-2.6 20.8-6.9 13.4-10.7 32.7-8.9 44 3.9 5.9 6.8 14.5 11 24.1 11 9.6 0 18.2-4.2 24.1-11 11.3-12.8 30.6-14.6 44-3.9 5.5 4.3 12.3 6.9 19.9 6.9 15 0 27.7-10.4 31.1-24.3 3.9-16.2 19.5-26.6 35.9-24.1 1.6.3 3.3.4 5 .4zm-96.9 75.3V464c0 8.8 8.1 16 16.9 16h15c7.4 0 13.8-5 15.5-12.1l13.8-55.2C370 419.8 357.5 424 344 424c-8.5 0-16.6-1.7-24.9-4.7zm-187.4-6.6 13.8 55.2c1.7 7.1 8.1 12.1 14.6 12.1h15c9.7 0 16-7.2 16-16v-44.7c-6.5 3-14.6 4.7-24 4.7-12.6 0-26-4.2-35.4-11.3z" />
  </svg>
);

const SvgSheep = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSheep;
