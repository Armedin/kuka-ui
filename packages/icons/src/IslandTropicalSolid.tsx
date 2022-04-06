import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M447.9 113.6c.5 3.625-.5 7.375-2.875 10.13C442.6 126.5 439.1 128 435.4 128h-36.3l-16-32-15.97 32h-101.8c11.25 48.12 28.76 143.1 18.51 231.9 52 17.12 92 62.37 99 118.1 3.26 18.2-12.34 34-31.74 34H32.08C12.33 512-2.51 494.25.36 474.75 10.86 404.2 71.48 352 142.7 352h53.38c10.02-42.9 25.02-122.9 21.02-202.5l-70.1 71c-6.3 5.4-15.9 4.3-19.4-1.9-25.1-35.7-20.5-87.6 14.5-122.6h-31l-16-32-16 32H44.62c-3.75 0-7.25-1.5-9.63-4.25-2.37-3.65-3.32-6.5-2.82-10.13C40.29 35.38 86.99 0 143.5 0c50.25 0 92.25 28.25 106.8 67.13C270.9 45.88 301.6 32 336.5 32c56.5 0 103.2 35.38 111.4 81.6z" />
  </svg>
);

const SvgIslandTropicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIslandTropicalSolid;
