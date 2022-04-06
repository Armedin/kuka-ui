import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m119.1 33.74-64-32c-7.875-4-17.5-.875-21.38 7.125-4 7.875-.875 17.5 7.125 21.38l64 32C107.1 63.36 109.5 63.99 112 63.99c7.375 0 13.88-5.125 15.62-12.38 1.68-7.12-1.82-14.62-8.52-17.87zM112 287.1c-2.5 0-4.875.625-7.125 1.75l-64 32c-8 3.875-11.12 13.5-7.25 21.38 4 8 13.62 11.12 21.5 7.25l64-32c6.625-3.375 10.12-10.88 8.5-18C125.9 293.1 119.4 287.1 112 287.1zm512-128h-64c-8.875 0-16 7.125-16 16s7.125 16 16 16h64c8.875 0 16-7.125 16-16s-7.1-16-16-16zm-528 16c0-8.875-7.125-16-16-16H16c-8.875 0-16 7.125-16 16s7.125 16 16 16h64c8.88 0 16-6.2 16-16zM528 63.99c2.5 0 4.875-.625 7.125-1.75l64-32c8-3.875 11.12-13.5 7.125-21.38-3.875-8-13.5-11.12-21.38-7.125l-64 32c-6.625 3.25-10.12 10.75-8.5 17.88C514.1 58.86 520.6 63.99 528 63.99zm71.1 257.71-64-32c-7.875-4-17.5-.75-21.5 7.125-3.875 7.875-.75 17.5 7.25 21.5l64 32c7.875 3.875 17.5.75 21.5-7.25 3.95-7.875.75-17.475-7.25-21.375zM319.5.013C222.7.293 144 79.89 144 177.4c0 42.91 15.47 84.34 43.55 116.6 13.33 15.31 35.84 49.59 43.73 76.02 1.078 8.688 8.844 14.62 17.64 13.71 8.703-.969 14.98-8.965 14.11-17.65l-.61-3.312c-10.31-34.97-36-72.84-50.73-89.77A145.807 145.807 0 0 1 176 177.4c0-81.24 63.05-145.1 143.5-145.3h.5c38.13 0 74.05 14.88 101.2 41.94C448.8 101.5 464 138.2 464 177.4c0 35.19-12.67 69.15-35.67 95.62-14.75 16.94-40.44 54.8-50.75 89.77l-.625 3.344c-1.047 8.75 4.938 17.59 13.67 18.68a19.07 19.07 0 0 0 2.281.156c7.797 0 14.36-5.12 15.36-13.12 8.344-28.25 30.86-62.53 44.2-77.84A177.953 177.953 0 0 0 496 177.4c0-47.71-18.55-92.49-52.22-126.1C410.5 18.08 365.6-1.175 319.5.013zM296 288c0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24s-10.7-24-24-24-24 10.7-24 24zm40-64V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v112c0 8.844 7.135 16 15.98 16S336 232.8 336 224zm47.9 191.1H256.1c-8.846 0-15.98 7.18-15.97 16.03l-.014 22.34c.01 6.27 1.88 12.46 5.355 17.68l17.08 25.69C267.8 505.6 279.8 512 289.2 512h61.67c9.418 0 21.39-6.43 26.61-14.27l17.02-25.69c2.953-4.441 5.411-12.36 5.419-17.69l-.114-22.34c-.005-8.81-7.105-16.91-15.905-16.91zm-16 39.3-16.11 24.45c-.49.45-1.69.25-.89 1.15l-60.29.117c-.424-.101-1.138-.277-1.423-.277-.14 0-.135-.227 0 0l-17.1-25.48-.01-6.367h95.94l.004 5.18c-.121.427-.321 1.227-.121 1.227 0 0-.1.1 0 0z" />
  </svg>
);

const SvgLightbulbExclamationOn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLightbulbExclamationOn;
