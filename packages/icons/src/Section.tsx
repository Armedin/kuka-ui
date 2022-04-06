import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M203.9 342.6c26.96-13.03 45.32-33.93 50.33-61.94 14.18-79.47-61.36-100.4-122.1-117.2l-14.63-4.16c-63.18-18-91.89-34.1-84.3-76.53 8.498-47.73 70.29-55.67 120.1-48.07 14.15 2.154 30.9 6.561 52.71 13.87 8.436 2.967 17.43-1.688 20.24-10.06 2.812-8.371-1.686-17.43-10.06-20.24-23.59-7.934-42.05-12.78-58.11-15.18C72.95-9.97 11.18 19.21.88 77.15c-8.779 49.07 17.62 75.9 49.7 92.27C24.62 182.4 6.692 203.5 1.706 231.4c-14.03 78.47 61.77 100.1 107 112.9l14.9 4.186c67.07 18.59 107.8 32.43 99.13 80.78-8.498 47.73-70.51 55.76-121 48.04-21.93-3.186-47.24-12.03-69.54-19.84l-10.96-3.811c-8.436-2.875-17.46 1.561-20.34 9.902-2.875 8.371 1.561 17.46 9.902 20.34l10.84 3.779c23.65 8.277 50.49 17.65 75.38 21.27C110.5 511 123.3 512 135.5 512c64.89 0 110-28.33 118.8-77.13 8.6-48.37-16.1-74.97-50.4-92.27zM33.2 236.1c4.89-26.5 29.82-43.6 66.9-48.3 2.662.771 22.68 6.42 22.68 6.42 67.07 18.59 107.8 32.42 99.13 80.78-4.875 27.23-29.56 44.65-67.27 49.23-7.863-2.344-38.02-10.72-38.02-10.72C55.66 295.9 25.64 279.3 33.2 236.1z" />
  </svg>
);

const SvgSection = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSection;
