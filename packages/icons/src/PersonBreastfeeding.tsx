import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M304 80c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-44.18 35.8-80 80-80s80 35.82 80 80zm-80-48c-26.5 0-48 21.49-48 48 0 26.5 21.5 48 48 48s48-21.5 48-48c0-26.51-21.5-48-48-48zM49.63 354.4c-13.63 20.4-5.78 48.2 16.52 58.5l148.55 68.6c8 3.7 11.5 13.2 7.8 21.2s-13.2 11.5-21.2 7.8L52.74 441.1C12.59 423.4-1.522 373.4 23 336.7l53.69-80.6c26.71-40 71.71-64.1 119.81-64.1h68.1c39.8 0 77.8 16.4 105 45.4l55.5 59.1c26.3 28 26 71.8-.8 99.4l-76.8 79.2c-6.2 6.4-16.3 6.5-22.6.4-6.4-6.2-6.5-16.3-.4-22.6l76.8-79.3c14.9-15.3 15.1-40.5.5-55.2l-55.5-59.1c-21.2-22.5-50.8-35.3-81.7-35.3h-68.1c-37.4 0-72.4 18.7-93.2 49.9l-53.67 80.5zm142.37 9c20.4 32.7 56.3 52.6 94.9 52.6h1.1c8.8 0 16 7.2 16 16s-7.2 16-16 16h-1.1c-49.6 0-95.7-25.6-122-67.6-3.2-5.1-4.9-11-4.9-17v-44.3c0-7.9 7.2-16 16-16s16 8.1 16 16v44.3zm32-27.4c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm48 16c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z" />
  </svg>
);

const SvgPersonBreastfeeding = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonBreastfeeding;
