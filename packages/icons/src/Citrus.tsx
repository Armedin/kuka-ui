import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M463.9 151.1c-4.469-7.703-14.38-10.25-21.84-5.828-7.656 4.422-10.28 14.2-5.844 21.86C454.4 199.5 464 235.4 464 272c0 114.7-93.31 208-208 208S48 386.69 48 272 141.3 64 256 64c12.42 0 24.66 1.463 36.76 3.621C289.9 76.65 288 86.05 288 96v16c0 8.8 7.2 16 16 16h80c53.02 0 96-42.98 96-96V16c0-8.836-7.164-16-16-16h-80c-31.23 0-58.71 15.16-76.25 38.26C290.8 34.52 273.6 31.1 256 31.1c-132.3 0-240 107.7-240 239.1S123.7 512 256 512s240-107.7 240-240c0-42.2-11.1-83.7-32.1-120.9zM384 32h64c0 35.29-28.71 64-64 64h-64c0-35.29 28.7-64 64-64z" />
  </svg>
);

const SvgCitrus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCitrus;
