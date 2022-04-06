import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M317.8 200.6c-4.508-7.625-14.26-10.09-21.89-5.656l-55.78 33.01V134.6l43.25-43.31c6.24-6.25 6.24-16.38 0-22.62s-16.35-6.25-22.59 0L240.1 89.38V48c0-8.844-7.146-16-15.98-16s-15.92 7.16-15.92 16v41.38l-20.7-20.69c-6.242-6.25-16.35-6.25-22.59 0-6.242 6.25-6.242 16.38 0 22.62l43.25 43.31v93.33L126.7 179.8l-15.4-57.5c-2.293-8.5-10.98-13.41-19.56-11.31a16.003 16.003 0 0 0-11.27 19.61l6.94 25.9-30.89-18.28c-7.615-4.438-17.38-1.969-21.89 5.656-4.47 7.624-1.96 17.424 5.64 21.924l34.05 20.15-30.48 8.15c-8.52 2.3-13.57 11.1-11.29 19.6 1.902 7.156 8.361 11.88 15.41 11.88 1.373 0 2.762-.188 4.15-.531l60.73-16.3L192.7 256l-79.9 47.3-60.69-17.2c-8.52-1.2-17.27 3.7-19.56 12.2-2.279 8.531 2.777 17.28 11.29 19.59l30.47 8.162-34.05 20.15c-7.598 4.5-10.11 14.31-5.633 21.91a15.967 15.967 0 0 0 21.896 5.669l30.89-18.28-6.939 25.9c-2.293 8.562 2.777 17.31 11.3 19.62 1.389.344 2.777.531 4.15.531 7.051 0 13.5-4.719 15.41-11.84l15.38-57.48 81.44-48.2v93.33l-43.25 43.31c-6.242 6.25-6.242 16.38 0 22.62 6.24 6.25 16.35 6.25 22.59 0l20.66-20.69V464c0 8.844 7.146 16 15.98 16s15.98-7.156 15.98-16v-41.38l20.66 20.69C263.9 446.4 267.1 448 272.1 448s8.176-1.562 11.29-4.688c6.24-6.25 6.24-16.38 0-22.62l-43.25-43.31V284.1l55.78 33.01a15.996 15.996 0 0 0 8.113 2.219 16 16 0 0 0 13.78-7.875C322.3 303.8 319.7 294 312.1 289.5L255.5 256l56.61-33.5c7.59-4.5 10.19-14.3 5.69-21.9zM448 354.9V336c0-8.75-7.25-16-16-16s-16 7.3-16 16v18.88c-18.6 6.62-32 24.22-32 45.12 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1zm64-33V80C512 35.87 476.13.9 432.9.9S352 35.88 352 80v241.9c-20.2 20.9-32 48.9-32 78.1 0 61.75 50.25 112 112 112s112-50.2 112-112c0-29.2-11.7-57.4-32-78.1zM432 480c-44.13 0-80-35.88-80-80 0-25.5 12.25-48.88 32-63.75V80c0-26.5 21.5-48 48-48s48 21.5 48 48v256.3c19.8 14.7 32 38.2 32 63.7 0 44.1-35.9 80-80 80z" />
  </svg>
);

const SvgTemperatureSnow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTemperatureSnow;