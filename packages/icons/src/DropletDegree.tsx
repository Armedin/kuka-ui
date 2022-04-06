import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M191.1 32c-10.4 0-21.6 6.32-25.7 19.36C122.9 189.3 32 226.9 32 324.1 32 410.2 103.6 480 192 480s160-69.78 160-155.9c0-97.78-90.73-134.1-133.4-272.8-3.7-12.7-15.1-19.3-27.5-19.3zm128 292.1c0 68.3-56.5 123.9-127.1 123.9S64 392.44 64 324.1c0-40.71 20.56-69.07 49.01-108.3 25.69-35.4 57.29-78.9 78.09-142.63 21.85 64.08 53.46 107.5 79.16 142.9C299.5 255 319.1 283.2 319.1 324.1zM352 32c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zm0 96c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgDropletDegree = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDropletDegree;
