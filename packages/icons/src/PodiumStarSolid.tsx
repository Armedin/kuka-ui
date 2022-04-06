import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 167.1c0 13.25-10.75 24-24 24H24c-13.25 0-24-9.8-24-24 0-13.25 10.75-24 23.1-24h56.28c6.75-53.75 46.5-97.13 98.5-108.8C183.5 14.1 201.1 0 224 0h62.2c23.21 0 44.5 15.69 48.89 38.48C340.1 69.15 317.6 95.1 288 95.1h-64c-13.25 0-25.25-5.375-33.88-13.1-32 6.749-56.38 31.12-62.75 61.1H424c13.3 0 24 11.6 24 24zm-400 56h352l-28.84 259.5c-1.801 16.21-15.66 28.47-31.96 28.47H108.8c-16.31 0-30.16-12.26-31.96-28.47L48 223.1zm95.5 135.7 33 32.13-7.75 45.5c-1.5 8.25 7.25 14.38 14.5 10.5l40.75-21.5 40.75 21.5c7.375 3.875 16-2.25 14.5-10.5l-7.75-45.5 33-32.13c5.875-5.875 2.625-16-5.625-17.12l-45.63-6.75-20.38-41.38c-3.625-7.375-14.12-7.5-17.88 0l-20.38 41.38-45.63 6.75C140.8 342.8 137.6 352.9 143.5 358.8z" />
  </svg>
);

const SvgPodiumStarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPodiumStarSolid;
