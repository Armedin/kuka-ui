import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m278.3 358.6-69.71 19.13c-31.73 7.084-35.22 26.88-38.14 55.1-2.551 22.31-19.18 40.51-41.52 45.5-28.32 6.32-56.44-11.08-62.51-38.84-5.041-23.07-2.236-42.46 17.05-57.89 8.402-6.664 12.06-17.44 9.799-27.81-2.264-10.36-10.05-18.46-20.45-20.93-23.92-5.789-34.57-22.3-39.61-45.38C27.11 259.7 45.37 231.1 73.68 225.7c22.34-4.984 45.01 4.447 56.62 23.6 14.4 24.3 25.8 40.8 57.5 32.8l86-18.3c8.629-1.926 14.08-10.56 12.17-19.28-1.904-8.723-10.45-14.23-19.07-12.31l-86 19.19c-11.3 2.5-11.1 1.7-23.3-19-18.7-30.9-55.2-46.3-90.82-38.3-45.65 10.19-74.72 55.24-64.86 100.4 7.033 32.2 23.15 56.17 55.17 67.39-24.37 23.81-29 52.41-21.97 84.61 9.865 45.16 55 73.64 100.7 63.46 35.64-7.955 62.35-37.47 66.4-73.44 2.443-23.97 1.916-24.62 13.27-27.16l69.85-19.16c8.686-1.939 14.17-10.53 12.27-19.23-1.91-8.77-11.51-14.27-19.31-12.37zm294.9-164.5c-35.64-7.953-72.16 7.443-90.82 38.35-12.2 20.7-11.1 21.52-23.35 18.99L373.1 232.2c-8.629-1.926-17.17 3.584-19.07 12.3-1.904 8.723 3.545 17.36 12.17 19.28l85.93 19.18c31.74 7.084 43.14-9.393 57.55-33.74 11.61-19.15 34.28-28.58 56.62-23.59 28.32 6.32 46.58 34.08 40.51 61.84-5.039 23.07-15.66 39.46-39.58 45.25-10.39 2.465-18.21 10.69-20.47 21.05-2.264 10.36 1.426 21.02 9.826 27.69 19.29 15.43 22.06 34.94 17.03 58.02-6.064 27.76-34.19 45.16-62.51 38.84-22.34-4.986-38.97-23.19-41.52-45.5-2.926-28.22-6.408-48.02-38.14-55.1l-69.71-19.13c-8.74-1.951-17.4 3.576-19.31 12.33-1.898 8.693 3.586 17.29 12.27 19.23l69.85 19.16c11.35 2.533 10.82 3.191 13.27 27.16 4.047 35.97 30.75 65.48 66.4 73.44 45.65 10.19 90.79-18.3 100.7-63.46 7.035-32.2 2.4-60.8-21.97-84.61 32.02-11.23 48.14-35.19 55.17-67.39C647.9 249.3 618.9 204.3 573.2 194.1zM319.1 0C311.2 0 304 7.156 304 16v96c0 8.844 7.154 15.1 15.1 15.1S336 120.8 336 112V16c0-8.844-7.2-16-16.9-16zm-90.4 155.3c3.1 3.1 7.2 4.7 11.3 4.7s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-64-64c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L228.7 155.3zM400 160c4.094 0 8.188-1.562 11.31-4.688l64-64c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-64 64c-6.25 6.25-6.25 16.38 0 22.62A16.063 16.063 0 0 0 400 160z" />
  </svg>
);

const SvgBoneBreak = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoneBreak;
