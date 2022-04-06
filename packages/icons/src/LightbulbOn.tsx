import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m119.1 33.74-64-31.1c-7.875-3.1-17.5-.875-21.38 7.125-4 7.875-.875 17.5 7.125 21.37l64 31.1C107.1 63.36 109.5 63.99 112 63.99c7.375 0 13.88-5.125 15.62-12.37 1.68-7.13-1.82-14.63-8.52-17.88zM112 287.1c-2.5 0-4.875.625-7.125 1.75l-64 31.1c-8 3.875-11.12 13.5-7.25 21.37 4 7.1 13.62 11.12 21.5 7.25l64-31.1c6.625-3.375 10.12-10.87 8.5-17.1C125.9 293.1 119.4 287.1 112 287.1zM528 63.99c2.5 0 4.875-.625 7.125-1.75l64-31.1c8-3.875 11.12-13.5 7.125-21.37-3.875-7.1-13.5-11.12-21.38-7.125l-64 31.1c-6.625 3.25-10.12 10.75-8.5 17.87C514.1 58.86 520.6 63.99 528 63.99zM96 175.1c0-8-7.12-16-16-16H16c-8.875 0-16 7.125-16 15.1s7.125 16.9 16 16.9h64c8.88 0 16-6.2 16-16zm528-16h-64c-8.875 0-16 7.125-16 15.1s7.125 15.1 16 15.1h64c8.875 0 16-7.125 16-15.1s-7.1-15.1-16-15.1zm-24.9 162.6-64-31.1c-7.875-3.1-17.5-.75-21.5 7.125-3.875 7.875-.75 17.5 7.25 21.5l64 31.1c7.875 3.875 17.5.75 21.5-7.25 3.95-7.875.75-17.475-7.25-21.375zM319.5.015C222.7.297 144 79.89 144 177.4c0 42.91 15.47 84.34 43.55 116.6 13.33 15.31 35.84 49.59 43.73 76.02 1.078 8.687 8.844 14.62 17.64 13.71 8.703-.969 14.98-8.965 14.11-17.65l-.61-3.312c-10.31-34.97-36-72.84-50.73-89.77A145.807 145.807 0 0 1 176 177.4c0-81.24 63.05-145.1 143.5-145.3h.5c38.13 0 74.05 14.87 101.2 41.94C448.8 101.5 464 138.2 464 177.4c0 35.19-12.67 69.15-35.67 95.62-14.75 16.94-40.44 54.8-50.75 89.77l-.625 3.344c-1.047 8.75 4.938 17.59 13.67 18.68a19.07 19.07 0 0 0 2.281.156c7.797 0 14.36-5.12 15.36-13.12 8.344-28.25 30.86-62.53 44.2-77.84A177.953 177.953 0 0 0 496 177.4c0-47.71-18.55-92.49-52.22-126.1C410.5 18.08 365.6-1.172 319.5.015zM383.1 415.1H256c-8.846 0-16.01 7.18-16 16.03l.075 22.34a32.1 32.1 0 0 0 5.359 17.68l17.09 25.69c5.225 7.855 17.22 14.28 26.65 14.28h61.72c9.418 0 21.41-6.43 26.63-14.27l17.09-25.69c2.953-4.441 5.35-12.36 5.359-17.68l-.026-22.34c-.847-7.94-7.147-16.04-16.847-16.04zm-15.2 39.3-16.11 24.45c-.477.437-1.686 1.086-.867 1.117l-60.29.117c-.424-.101-1.138-.277-1.423-.277-.14 0-.135-.227 0 0l-17.1-25.48-.01-6.367h95.94l.004 5.18c-.144.46-.344 1.26-.144 1.26 0 0-.1.1 0 0zM336 80.02c0-8.84-7.156-16-16-16-61.75 0-112 50.24-112 111.1 0 8.844 7.156 16 16 16s16-7.159 16-16c0-44.1 35.88-79.1 80-79.1 8.8-.01 16-7.16 16-16z" />
  </svg>
);

const SvgLightbulbOn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLightbulbOn;
