import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M304 95.1c26.5 0 48-21.5 48-47.1S330.5 0 304 0s-48 21.5-48 47.1 21.5 48 48 48zM560 0h-96c-26.5 0-48 21.5-48 47.1v175.1h-44.22l-26.97-53.95a95.874 95.874 0 0 0-57.25-48.7L219.8 100.2c-31.9-9.984-66.69-2.625-91.84 19.39L90.94 151.9c-13.31 11.6-14.65 31.9-3.04 45.2 11.65 13.28 31.87 14.62 45.18 3.008l36.99-32.38a32.076 32.076 0 0 1 30.46-6.525l-30.95 92.8c-9.344 28.03 1.729 58.85 26.82 74.49l86.21 53.88-25.41 88.83c-4.832 16.99 4.992 34.72 21.98 39.58 16.99 4.832 34.72-4.992 39.58-21.98l28.67-100.4c5.887-20.57-2.561-42.56-20.71-53.88L270 299l28.99-77.37 19.91 39.87c8.129 16.26 24.77 26.53 42.95 26.53H416v175.1c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V47.1C608 21.5 586.5 0 560 0zM145.5 319.1 131.1 352H64c-17.66 0-32 14.34-32 31.1 0 17.66 14.34 32 32 32h77.54c19.07 0 36.32-11.3 43.97-28.77l9.568-21.86-15.62-9.76C164.7 346.4 153.2 333.7 145.5 319.1z" />
  </svg>
);

const SvgPersonToDoorSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonToDoorSolid;