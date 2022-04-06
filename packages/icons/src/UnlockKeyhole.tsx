import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M184 368c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80zm40-336c-53.9 0-96 42.98-96 96v64h240c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V272c0-44.2 35.82-80 80-80h16v-64C96 57.31 153.3 0 224 0c58 0 106.1 38.57 122.7 91.44 2.5 8.47-2.3 17.36-10.8 19.86-8.4 2.6-17.4-2.3-19.9-10.7C304.2 60.9 267.5 32 224 32zM80 224c-26.51 0-48 21.5-48 48v160c0 26.5 21.49 48 48 48h288c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80z" />
  </svg>
);

const SvgUnlockKeyhole = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUnlockKeyhole;
