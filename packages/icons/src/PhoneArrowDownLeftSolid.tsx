import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m493.1 351.2-108.5-46.5c-12.78-5.531-27.8-1.812-36.48 8.969l-44.05 53.81c-69.25-34-125.5-90.28-159.5-159.5l53.83-44.09c10.75-8.781 14.42-23.66 8.984-36.44L160.8 18.93C154.7 5.027 139.7-2.598 124.1.808L24.22 24.06C9.969 27.31 0 39.84 0 54.5 0 306.8 205.2 512 457.5 512c14.67 0 27.2-9.969 30.47-24.22l23.25-100.8c3.38-14.58-4.22-29.78-18.12-35.78zM320 224h96c17.67 0 32-14.33 32-32s-14.33-32-32-32h-18.75l105.4-105.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L352 114.8V96c0-17.67-14.33-32-32-32s-32 14.33-32 32v96c0 17.7 14.3 32 32 32z" />
  </svg>
);

const SvgPhoneArrowDownLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPhoneArrowDownLeftSolid;
