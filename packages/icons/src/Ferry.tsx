import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M352 0c17.7 0 32 14.33 32 32h68c17.1 0 28.7 17.42 22.2 33.23L461.3 96h2.7c26.5 0 48 21.5 48 48v151.1c0 8.7-2.4 17.3-6.8 24.7l-43.5 72.4c-4.5 7.6-14.4 10.1-21.9 5.5-7.6-4.5-10.1-14.4-5.5-21.9l33.4-55.8H108.3l33.4 55.8c4.6 7.5 2.1 17.4-5.5 21.9-7.5 4.6-17.4 2.1-21.9-5.5l-43.46-72.4c-4.48-7.4-6.84-16-6.84-24.7V144c0-26.5 21.49-48 48-48h2.7l-12.9-30.77C95.26 49.42 106.9 32 124 32h68c0-17.67 14.3-32 32-32h128zm64 192H159.1v96H416v-96zm64 96V144c0-8.8-7.2-16-16-16H111.1c-7.9 0-16 7.2-16 16v144h32V176c0-8.8 8.1-16 16-16H432c8.8 0 16 7.2 16 16v112h32zM426.7 96 440 64h-88V32H223.1v32h-88l14.2 32h277.4zM250.1 458.8c9.8-6.7 18.1-14 26-21.9 6.5-6.5 17.2-6.5 23.7 0 8 7.9 15.3 15.2 26 21.9 16.5 11.2 37.3 20.3 57.3 20.3 21.8 0 42.5-9.1 59.1-20.3 9.7-6.7 18-14 25.9-21.9 6.5-6.5 17.2-6.5 23.7 0 8 7.9 15.3 15.2 26 21.9 12.8 8.7 28.1 16.6 44.1 19.8 7.7 1.5 14.1 7.8 14.1 15.6 0 9.8-8.9 17.9-17.7 16.2-23.1-3.9-43.6-15-58.5-25.2-8-5.4-14.7-10.8-20.7-16.1-4.3 5.3-11 10.7-18.9 16.1-18.7 12.7-45.9 25.9-77.1 25.9-29.4 0-56.7-13.2-75.3-25.9-8-5.4-14.7-10.8-20.7-16.1-4.3 5.3-11 10.7-18.9 16.1-18.7 12.7-45.9 25.9-77.1 25.9-29.4 0-56.7-13.2-75.3-25.9-8-5.4-14.7-10.8-19.84-16.1-5.14 5.3-11.84 10.7-19.77 16.1-14.94 10.2-35.38 21.3-58.5 25.2C8.015 512.1 0 504 0 494.2c0-7.8 6.421-14.1 14.13-15.6 15.94-3.2 31.25-11.1 44.03-19.8 9.78-6.7 18-14 25.91-21.9 6.57-6.5 17.23-6.5 23.73 0 8 7.9 16.3 15.3 26 21.9 16.5 11.2 37.3 20.3 57.3 20.3 21.8 0 42.5-9.1 59-20.3z" />
  </svg>
);

const SvgFerry = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFerry;
