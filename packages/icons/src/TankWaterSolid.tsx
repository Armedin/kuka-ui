import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 224c30.94 0 56-24.03 56-53.66S223.1 64 223.1 64 168 140.7 168 170.3s25.1 53.7 56 53.7zM384 32H248.3c13.12 17.5 25.95 35.17 37.66 53.63 2.04 3.33 4.24 6.82 6.44 10.37H384v216.7c-22.53 13.02-51.17 11.2-71.97-5.439L297.1 296c-5.824-4.672-14.14-4.672-19.97 0l-14.05 11.23c-23.36 18.69-56.58 18.69-79.94 0L169.1 296c-5.824-4.672-14.14-4.672-19.97 0l-14.03 11.2c-19.9 16.7-48.57 18.5-71.1 5.5V96h91.65c2.145-3.553 4.287-7.039 6.432-10.37C173.8 67.17 186.6 49.5 199.7 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64z" />
  </svg>
);

const SvgTankWaterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTankWaterSolid;
