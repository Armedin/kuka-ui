import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M544 32.01c0-19.62-17.5-34.63-36.89-31.62L336 26.86v384l208-46.23V32.01zm-240-5.15L132.9.383C113.5-2.617 96 12.38 96 32.01v332.6l208 46.23V26.86zm296.2 6.11L576 39.03v325.6c0 14.1-10.42 27.98-25.06 31.24L320 447.2 89.06 395.9C74.42 392.6 64 379.7 64 364.7V39.03l-24.24-6.06C19.56 27.92 0 43.19 0 64.01v351.1c0 15 10.42 27.98 25.06 31.24l288 63.1a31.984 31.984 0 0 0 13.88 0l288-63.1C629.6 443.1 640 431 640 416V64.01c0-20.82-19.6-36.09-39.8-31.04z" />
  </svg>
);

const SvgBookOpenCoverSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookOpenCoverSolid;
