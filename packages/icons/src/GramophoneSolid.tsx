import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M69.5 317.1c62.88-43.13 161.9-94.5 238.6-73.88 11.75 3.125 19.88 13.75 19.88 25.88 0 19.25-15.62 34.75-34.75 34.75H184c-13.25 0-24 10.75-24 24v24.05h133.3c45.63 0 82.75-37 82.75-82.75 0-33.88-22.75-63.5-55.38-72.25-77.5-20.75-137.6-116-169.7-183.3C141.3-6.526 111.8-3.655 106 17.72L32.88 290.1c-5.88 22.5 18.5 39.4 36.62 27zm298.5 130h-16v-32c0-17.63-14.38-32-32-32H64c-17.62 0-32 14.37-32 32v32H16.9c-8.875 0-16 7.125-16 16v32c0 8.875 7.125 16 16 16h352c8.875 0 16-7.125 16-16v-32c-.9-8-8-16-16.9-16z" />
  </svg>
);

const SvgGramophoneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGramophoneSolid;
