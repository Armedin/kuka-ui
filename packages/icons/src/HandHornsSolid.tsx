import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M288 320c17.69 0 32-14.33 32-32v-64c0-17.67-14.31-32-32-32s-32 14.33-32 32v64c0 17.7 14.3 32 32 32zm-64-32.5V192c0-17.67-14.31-32-32-32s-32 14.3-32 32v56.14c26.1.06 51.8 15.36 64 39.36zM384 64c-17.69 0-32 14.33-32 32v192c0 35.34-28.66 64-64 64-19.22 0-36.27-8.654-48-22.07-3.291 3.764-7.084 7.033-11.14 9.961C221.8 364.2 202.4 384.2 176 390.2l-61.14 13.95L96.5 375.5l72.4-16.5c18.54-4.238 31.1-20.72 31.1-38.97 0-20.41-16.26-40.03-39.97-40.03-2.946 0-5.942.324-8.947.998l-120 27.38c-29.22 6.68-31.1 34.69-31.1 39.01 0 5.581 1.167 11.17 3.508 16.38l22.09 49.11C52.66 473.1 112.8 512 178.8 512H240c97.03 0 176-78.95 176-176V96c0-17.67-14.3-32-32-32zM128 32c0-17.67-14.31-32-32-32S64 14.33 64 32v236l64-14.6V32z" />
  </svg>
);

const SvgHandHornsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandHornsSolid;
