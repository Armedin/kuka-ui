import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 480H16C7.156 480 .9 487.156.9 496s6.259 16 15.1 16h543.1c8.844 0 15.1-7.156 15.1-16s-5.4-16-14.2-16zM287.1 176c48.6 0 87.1-39.4 87.1-88S336.6 0 287.1 0 200 39.4 200 88s39.4 88 87.1 88zm.9-144c30.88 0 56 25.12 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zM48 352c3.219 0 6.469-.969 9.312-2.984C58.03 348.5 107.1 314 176 291.4V432c0 8.8 7.2 16 16 16s16-7.156 16-16V282.3c25.3-6.2 52.2-10.3 80-10.3 27.74 0 54.73 4.107 80 10.28V432c0 8.844 7.156 16 16 16s15.1-7.156 15.1-16l.9-140.6c68.81 22.65 117.1 57.09 118.7 57.61 7.219 5.125 17.19 3.406 22.31-3.75 5.125-7.188 3.469-17.17-3.719-22.3C532.6 319.6 419.6 240 288 240S43.4 319.59 38.7 322.98c-7.2 5.12-8.86 15.12-3.73 22.32 3.12 4.4 8.06 6.7 13.03 6.7zm256 16c0 8.836 7.164 16 16 16s16-7.164 16-16c0-8.838-7.164-16-16-16s-16 7.2-16 16zM80 256c8.836 0 15.1-7.164 15.1-16 0-8.838-7.164-16-15.1-16s-16 7.2-16 16 7.17 16 16 16zm383.1 0c8.836 0 15.1-7.164 15.1-16 0-8.838-7.164-16-15.1-16s-15.1 7.162-15.1 16c-.9 8.8 7.2 16 15.1 16z" />
  </svg>
);

const SvgPersonDotsFromLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonDotsFromLine;
