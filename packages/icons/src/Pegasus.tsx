import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 86.25v94.07c0 20.51-13.07 38.73-32.5 45.3l-25.5 8.625c-5.5 1.855-36.4 9.855-55.5-18.745L448 193.8v50.5c0 29.75-11.5 58-32 79.5V464c0 26.51-21.49 48-48 48h-32c-26.51 0-48-21.49-48-48V351.5l-83.88-18.62-19.25 53.75 16.59 65.61C209.1 482.6 186.2 512 154.9 512h-24.3c-22.19 0-41.48-15.21-46.67-36.78l-18.17-75.59c-2.625-10.75-2.25-22 .75-32.75l22-74.25C72.88 274.8 64 251.6 64 227.4c0-5.9.75-11.4 1.75-17C46.25 216.5 32 234.5 32 256v48c0 8.8-7.16 16-16.9 16S0 312.8 0 304v-48c0-43.75 35.13-79.13 78.63-79.88 11.75-19.25 29.5-33.88 50.63-41.75 1 10.88 3 21.5 6.125 31.88C112.3 176.9 96 200.1 96 227.4c0 22.88 11.5 43 28.88 55.13L97.25 376a30.905 30.905 0 0 0-.41 15.98l18.21 75.76C116.8 474.9 123.2 480 130.6 480h24.35c10.43 0 18.07-9.812 15.51-19.92L151.5 385l32.13-89.5L320 325.8V464c0 8.836 7.164 16 16 16h32c8.836 0 15.99-7.164 15.99-16l.01-154.2c19.38-15.38 32-38.88 32-65.5V144l48 16 25.12 37.75c2.375 3.5 9.125 9.5 18.5 6.25l25.5-8.75C539.6 193.1 544 187 544 180.1V86.25L523.5 61.5c11.6-4.87 19.8-16.25 19.8-29.5H432c-53.02 0-96 42.98-96 96l-.01 32C276.1 160 229.4 130.3 200 73.75c-5.2 15.13-8 31.05-8 47.35 0 60.5 45.75 115.4 107.5 130.5 4.125 1.125 6.875 5 6 9.25l-2.9 15.65c-.8 4.5-5.3 7.5-9.7 6.5C216.5 264.8 160 196.5 160 121.1c0-26 5.625-51.13 16.75-74.75C181 37.38 189.4 32.25 199.9 32c10 .125 19 6.125 23 15.38 18.38 41.88 45.88 67.38 81.5 76.5C306.6 55.25 362.9 0 431.1 0l111.3-.002c16.78 0 31.39 13.04 31.96 29.81.416 12.17-2.605 23.84-8.459 33.95C572.3 70.38 576 76.63 576 86.25zM496 96c0-8.875-7.125-16-16-16s-16 7.13-16 16 7.125 16 16 16 16-7.1 16-16z" />
  </svg>
);

const SvgPegasus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPegasus;