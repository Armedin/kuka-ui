import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 163v-19h24c4.418 0 8-3.578 8-7.1V120c0-4.418-3.582-7.1-8-7.1h-24V96h24.63c16.41 0 24.62-19.84 13.02-31.44L200.68 3.59c-4.795-4.793-12.57-4.793-17.36 0L122.3 64.56C110.7 76.16 118.917 96 135.32 96H160v15.1h-24c-4.418 0-8 3.582-8 7.1v15.1c0 4.422 3.582 7.1 8 7.1h24v19.05c-84.9 15.62-148.5 92.01-143.7 182.5 4.783 90.69 82.34 165.1 173.2 166.5C287.8 513.4 368 434.1 368 336c0-86.3-62.1-157.9-144-173zm-32 268.1c-52.94 0-96-43.06-96-95.1s43.06-95.1 96-95.1c52.93 0 96 43.06 96 95.1s-43.1 95.1-96 95.1z" />
  </svg>
);

const SvgMarsStrokeUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMarsStrokeUpSolid;
