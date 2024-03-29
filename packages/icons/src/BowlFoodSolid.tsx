import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 128h1.6c7.4-36.51 39.7-64 78.4-64 14.1 0 28.1 4.1 40.9 11.25C230.2 49.55 257.1 32 288 32c30.9 0 57.8 17.56 71.1 43.25C371 68.1 385 64 400 64c38.7 0 70.1 27.49 78.4 64h1.6c35.3 0 64 28.7 64 64 0 11.7-3.1 22.6-8.6 32H40.56c-5.44-9.4-8.56-20.3-8.56-32 0-35.3 28.65-64 64-64zM16 283.4c0-15.1 12.28-27.4 27.43-27.4H532.6c15.1 0 27.4 12.3 27.4 27.4 0 72.9-47.4 134.8-113.1 156.4.7 2.6 1.1 5.4 1.1 8.2 0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32 0-2.8.4-5.6 1.1-8.2C63.4 418.2 16 356.3 16 283.4z" />
  </svg>
);

const SvgBowlFoodSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBowlFoodSolid;
