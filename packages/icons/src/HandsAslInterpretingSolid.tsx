import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M200 240c16.94 0 32.09 10.72 37.73 26.67 5.891 16.66 24.17 25.39 40.84 19.5 16.66-5.891 25.39-24.17 19.5-40.84-10.87-30.63-35.27-53.73-64.97-63.83l79.68-22.76c16.98-4.859 26.83-22.56 21.97-39.56-4.85-16.98-22.55-26.83-39.55-21.94L196 125.6l80.82-69.28c13.42-11.5 14.97-31.7 3.469-45.12C268.8-2.24 248.6-3.803 235.2 7.713l-100.4 86.09 22.33-48.39c7.391-16.05.39-35.06-15.66-42.47C125.4-4.412 106.4 2.525 98.94 18.6l-84.02 188C5.082 228.6 0 252.5 0 276.6 0 335.9 48.1 384 107.4 384l99.9-.006c31.87-2.29 61.15-19.35 79.13-46.18 9.828-14.69 5.891-34.56-8.781-44.41C263 283.6 243.1 287.5 233.3 302.2c-7.5 11.1-19.9 17.8-33.3 17.8-22.06 0-40-17.94-40-40 0-22.1 17.9-40 40-40zm332.6-112-99.9.004c-31.87 2.289-61.15 19.35-79.13 46.18-9.828 14.69-5.891 34.56 8.781 44.41 14.66 9.812 34.55 5.906 44.41-8.781C414.2 198.7 426.6 191.1 440 191.1c22.06 0 40 17.94 40 40s-17.94 39.1-40 39.1c-16.94 0-32.09-10.72-37.73-26.67-5.891-16.66-24.17-25.39-40.84-19.5-16.66 5.891-25.39 24.17-19.5 40.84 10.84 30.64 35.23 53.77 64.96 63.8l-79.68 22.76c-16.98 4.859-26.83 22.56-21.97 39.56 4.844 16.98 22.56 26.86 39.56 21.97l99.2-28.34-80.82 69.28c-13.42 11.5-14.97 31.7-3.469 45.12 11.52 13.42 31.73 14.98 45.13 3.469l100.4-86.09-22.33 48.39c-7.391 16.05-.39 35.06 15.66 42.47 16.02 7.359 35.05.422 42.47-15.65l84.02-188C634.9 283.4 640 259.5 640 235.4c0-59.3-48.1-107.4-107.4-107.4z" />
  </svg>
);

const SvgHandsAslInterpretingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandsAslInterpretingSolid;
