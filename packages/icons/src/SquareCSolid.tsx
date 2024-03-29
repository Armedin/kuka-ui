import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM167.2 312.3c14.93 15.13 34.76 23.49 55.86 23.49s40.94-8.32 55.88-23.49c9.33-9.418 24.55-9.545 33.95-.125 9.426 9.357 9.488 24.62.156 34.1C289 370.6 257 384 223.1 384c0 0 .016 0 0 0-33.1 0-65.95-13.41-89.96-37.74-49.46-50.08-49.46-131.6 0-181.7 48-48.7 131.9-48.7 179.1 0 9.332 9.451 9.27 24.71-.156 34.1-9.395 9.357-24.59 9.326-33.95-.156-29.89-30.27-81.89-30.24-111.7 0C136.2 229.9 136.2 280.9 167.2 312.3z" />
  </svg>
);

const SvgSquareCSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareCSolid;
