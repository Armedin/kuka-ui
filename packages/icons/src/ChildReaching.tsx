import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 64c0 35.35-28.7 64-64.9 64-34.4 0-64-28.65-64-64s29.6-64 64-64C227.3 0 256 28.65 256 64zm-64.9-32c-16.8 0-32 14.33-32 32s15.2 32 32 32c18.6 0 32.9-14.33 32.9-32s-14.3-32-32.9-32zM112 188c-27.81-14.8-51.41-37.4-67.52-65.8l-10.39-18.3c-4.36-7.69-1.67-17.45 6.02-21.81 7.68-4.37 17.45-1.67 21.81 6.01l10.39 18.3c24.42 43 70.09 69.6 119.59 69.6 48.8 0 93.2-26 118.7-68.2l11.6-19.86c4.4-7.64 14.2-10.21 21.9-5.76 7.6 4.45 10.2 14.25 5.7 21.92l-11.6 19.8c-16 27.5-39.1 49.4-66.2 64V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V384h-96v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V188zm32 13.1V352h96V201c-15.4 4.6-31.6 7-48.1 7s-32.6-2.4-47.9-6.9z" />
  </svg>
);

const SvgChildReaching = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChildReaching;
