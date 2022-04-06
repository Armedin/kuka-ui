import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528 352c-44.18 0-79.1 35.82-79.1 80s35.82 80 79.1 80c44.2 0 80-35.8 80-80s-35.8-80-80-80zm80-167.3C608 110.5 537.1 0 435.1 0c-95.81 0-87.21 84.52-165.7 145.6l-6.2 4.8c-10 7.8-48.7 38.7-48.7 102.4 0 17.93 4.149 35.08 11.42 50.62l-182.5 152C35.77 461.8 32 470.8 32 480c0 21.4 18.39 32 32.01 32 7.219 0 14.48-2.438 20.47-7.406l183.3-152.8c18.97 12.69 41.69 21.11 71.89 21.11 26.7 0 53.6-8.506 76.28-26.14l6.237-4.873c27.08-21.04 61.41-36.49 107.1-48.63C567.9 283.5 608 248.8 608 184.7zM382.8 291.5l-6.1 4.8c-12.13 9.432-24.06 12.42-36.89 12.42-52.47 0-61.31-41.46-61.31-55.5 0-6.43.356-33.87 23.88-52.16l6.402-4.955C400.1 124.3 383.1 64 435.1 64 486.64 64 544 127.86 544 185.1c-.9 69.4-63.8 30.8-161.2 106.4z" />
  </svg>
);

const SvgLacrosseStickBallSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLacrosseStickBallSolid;