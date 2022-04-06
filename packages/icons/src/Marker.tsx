import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M294.6 61.25c-3.4-3.4-7.4-5.88-12.5-7.43-10.4-4.13-23.6-1.65-32.7 7.43l-94.1 94.05c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.2-16.4 0-22.6l94-94.07c25-25 65.6-25 90.6 0l13 13.09L351 31.03c35.9-35.879 94.1-35.879 129.1 0 36.8 35.88 36.8 94.07 0 129.07L229.5 412.5c-48 48-109.2 80.7-175.8 94l-24.99 5c-7.87 1.6-16.01-.9-21.68-7.4-5.674-4.8-8.137-12.9-6.564-20.8l4.999-25C18.78 391.7 51.52 330.5 99.54 282.5L307.7 74.34l-13.1-13.09zM208.1 218.3l85.6 84.7 164.6-164.7c23.4-24.2 23.4-61.25 0-84.64-24.2-23.39-61.3-23.39-84.6 0L208.1 218.3zm-21.8 21.8-64.1 65.1c-43.59 43.5-73.28 99-85.36 159.4l-2.64 13.2 13.22-2.6a312.348 312.348 0 0 0 159.48-85.4l64.1-64.1-84.7-85.6z" />
  </svg>
);

const SvgMarker = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMarker;