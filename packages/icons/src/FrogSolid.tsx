import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 416h-32.07l-90.32-96.34 140.6-79.03c18.38-10.25 29.75-29.62 29.75-50.62 0-21.5-11.75-41-30.5-51.25-40.5-22.25-99.07-41.43-99.07-41.43C439.6 60.19 407.3 32 368 32s-71.77 28.25-78.52 65.5C126.7 113-.5 250.1 0 417c.125 34.9 29.13 63 64 63h304c8.875 0 16-7.125 16-16 0-26.51-21.49-48-47.1-48h-52.6l23.93-32.38c24.25-36.13 10.38-88.25-33.63-106.5-23.8-10.02-51.6-4.72-72.2 10.88l-32.8 24.5c-7.125 5.375-17.12 4-22.38-3.125-5.375-7.125-4-17.12 3.125-22.38l34.75-26.12c36.87-27.62 88.37-27.62 125.1 0 10.88 8.125 45.88 39 40.88 93.13L469.6 480h90.38c8.875 0 16-7.125 16-16 .02-26.5-21.48-48-47.98-48zM344 112c0-13.25 10.75-24 24-24s24 10.75 24 24-10.75 24-24 24-24-10.7-24-24z" />
  </svg>
);

const SvgFrogSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFrogSolid;
