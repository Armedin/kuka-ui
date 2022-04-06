import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 64c-17.69 0-32 14.33-32 32v224c0 35.34-28.66 64-64 64-19.22 0-36.27-8.654-48-22.07C292.3 375.3 275.2 384 256 384c-35.34 0-64-28.66-64-64V32c0-17.67-14.31-32-32-32s-32 14.33-32 32v304c0 2.646.28 5.213.397 7.832L68.28 283.7C60.47 275.9 50.23 272 40 272c-22.8 0-40 18.6-40 39.1 0 10.24 3.906 20.47 11.72 28.29l122.5 122.5C165.9 494.5 208.1 512 253 512h50.89C400.9 512 480 432.1 480 335.9V96c0-17.67-14.3-32-32-32zm-96 288c17.69 0 32-14.33 32-32v-64c0-17.67-14.31-32-32-32s-32 14.33-32 32v64c0 17.7 14.3 32 32 32zm-96 0c17.69 0 32-14.33 32-32v-96c0-17.67-14.31-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32z" />
  </svg>
);

const SvgHandLoveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandLoveSolid;
