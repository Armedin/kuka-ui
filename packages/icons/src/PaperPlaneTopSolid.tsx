import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M511.1 255.1c0 12.8-7.625 24.38-19.41 29.41L44.6 477.4a31.779 31.779 0 0 1-12.59 2.594c-8.625 0-17.09-3.5-23.28-10.05-9.219-9.766-11.34-24.25-5.344-36.27l73.66-147.3 242.1-30.37L77.03 225.6 3.37 78.3c-5.993-12-3.868-26.49 5.35-36.25 9.25-9.766 23.56-12.75 35.87-7.453L492.6 226.6c11.8 5 18.5 16.6 18.5 28.5z" />
  </svg>
);

const SvgPaperPlaneTopSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaperPlaneTopSolid;
