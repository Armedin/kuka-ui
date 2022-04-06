import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M430.8 304.9c10 5.625 19 12.37 27 20.37C487.1 292.8 529 272 576 272v-64c-61 0-116.2 24.62-156.8 64.25 5.7 9.95 9.8 20.95 11.6 32.65zm-31.6 20.7c.2-1.8.8-3.7.8-5.6 0-35.25-28.75-64-64-64-12.62 0-24.25 3.75-34.13 10-17.67-38.9-56.47-66-101.87-66-61.88 0-112 50.12-112 112 0 3 .75 5.75.875 8.75C39.25 324.4 0 365.4 0 416c0 53 43 96 96 96h272c53 0 96-43 96-96 0-42-27.2-77.4-64.8-90.4zm-160.6-152c21 5.875 40.38 16.5 56.62 31C359.6 119.4 461.2 64 576 64V0C437.1 0 314.2 68.75 238.6 173.6zm87.2 51.5c7.4-.9 36.7-5.3 68.4 18.9 46.4-46.8 110.7-76 181.8-76v-64c-101.2 0-191.6 47.4-250.2 121.1z" />
  </svg>
);

const SvgCloudRainbowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudRainbowSolid;
