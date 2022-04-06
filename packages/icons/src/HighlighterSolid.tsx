import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M143.1 320v-71.7c0-15.3 8.1-29.6 20.4-38.7L436.6 8.398C444 2.943 452.1 0 462.2 0c11.4 0 22.3 4.539 30.4 12.62l54.8 54.76c8.1 8.08 11.7 19.04 11.7 30.46 0 9.16-2 17.26-7.5 25.56L350.4 396.5c-9.1 12.3-24.3 19.5-38.7 19.5h-72.6l-24.5 25.4c-12.5 12.5-32.7 12.5-45.2 0l-50.8-50.8c-12.5-12.5-12.5-32.7 0-45.2l24.5-25.4zM489.4 99.92l-29.3-29.33L245 229l85.1 85.1L489.4 99.92zM23.03 466.3l63.03-63 70.64 70.6-31 30.2c-4.5 5.4-10.6 7.9-17 7.9H40c-13.25 0-24-10.7-24-24v-4.7c0-7.2 2.53-12.5 7.03-17z" />
  </svg>
);

const SvgHighlighterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHighlighterSolid;
