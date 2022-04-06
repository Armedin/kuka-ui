import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M33.21 134.1c2.47 6 8.32 9.9 13.89 9.9H192c8.8 0 16-7.2 16-16V64c0-8.844-7.156-16-16-16v-8c0-22.09-17.9-40-40-40s-40 17.91-40 40v8H47.1c-6.469 0-12.31 3.891-14.78 9.875s-.2 12.855 4.36 17.435L57.37 96l-20.69 20.7c-4.56 4.6-5.93 11.4-3.47 17.4zM384 240c-9.148 0-17.62 2.697-24.89 7.143C354.9 224.9 335.5 208 312 208c-17.38 0-32.46 9.33-40.89 23.17C266.1 208.9 247.5 192 224 192c-12.3 0-23.5 4.8-32 12.5V176h-80l-.006 159.1c0 8.836-7.17 15.1-16.01 15.1-8.838 0-16-7.164-16-16v-43.7l-29.99 23.99A48.08 48.08 0 0 0 32 352v48c0 10.38 3.375 20.48 9.594 28.8l19.19 25.59C87.84 490.5 130.9 512 176 512h112c3.318 0 6.557-.338 9.686-.979C372.5 505.9 432 444.1 432 368v-80c0-26.5-21.5-48-48-48z" />
  </svg>
);

const SvgHandBackPointRibbonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandBackPointRibbonSolid;
