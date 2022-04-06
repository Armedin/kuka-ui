import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M400.9 256c47.5 76.38 66.25 155.1 22.25 199.1C381.8 496.5 307.3 484.4 224 432.5c-83.63 52-157.9 63.88-199.1 22.63-44-44-25.25-122.8 22.25-199.1-47.5-76.38-66.25-155.1-22.25-199.1S147.6 31.61 224 79.12c76.25-47.5 155.1-66.25 199.1-22.25S448.4 179.6 400.9 256zM167.4 391.8c-26.13-21.5-50.38-44-79.13-78.88-24.88 47.25-30.5 84.63-18.13 97.01 12.35 12.37 48.96 6.67 97.26-18.13zM88.24 199.1a563.625 563.625 0 0 1 79.13-79.13c-57.58-30.42-87.94-27.19-97.26-17.88-12.37 12.41-6.74 49.81 18.13 97.01zM323 256c-28.4-37.5-61.6-71.9-99-99.4-37.4 27.5-70.6 61.9-98.9 99.4 25 34 54 64.8 98.9 99 34-26 64.8-54.1 99-99zm-67.9-.9c0 17.63-14.38 32-32 32s-32-14.37-32-32c0-17.63 14.38-32.03 32-32.03s32 15.23 32 32.03zm122.8-153c-9.361-9.361-39.92-12.41-97.26 17.88 29 23.75 55.5 50.25 79.13 79.13 24.83-47.21 30.53-84.61 18.13-97.01zm-18.1 210.8c-28.88 35-53.13 57.38-79.13 78.88 47.38 24.88 84.88 30.5 97.26 18.13 12.37-12.41 6.67-49.81-18.13-97.01z" />
  </svg>
);

const SvgAtomSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAtomSimpleSolid;