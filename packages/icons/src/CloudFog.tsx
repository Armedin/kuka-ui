import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M168 320h304c57.3 0 104-46.7 104-104 0-54.75-42.63-99.75-96.25-103.8C475.8 67.38 437.9 32 392 32c-17.75 0-34.75 5.25-49.25 15.25C320.3 17.75 285.5 0 248 0c-66.2 0-120 53.75-120 120v.375c-38.25 16-64 53.5-64 95.63C64 273.3 110.8 320 168 320zm-18.7-173.2c7.666-2.006 12.7-9.352 11.79-17.22-.69-5.98-1.09-7.48-1.09-9.58 0-48.5 39.5-88 88-88 32.25 0 61.75 17.88 77.25 46.75 5.123 9.699 18.3 11.43 25.75 3.375 12.77-13.8 30.54-20.19 49.26-17.54 25.35 3.584 44.32 25.31 47.34 50.74.63 5.309.514 5.066-.352 11.55-1.268 10.14 7.193 19.02 17.36 17.99 5.592-.565 5.192-.765 7.392-.765 39.75 0 72 32.25 72 72 0 39.63-32.25 72-72 72H168c-39.75 0-72-32.38-72-72 0-32.3 21.9-60.8 53.3-69.3zM208 480H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16zm416 0H304c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.801 0 16-7.199 16-16s-7.2-16-16-16zm-48-80c0-8.8-7.2-16-16-16H16c-8.799 0-16 7.2-16 15.1S7.201 416 16 416h544c8.8 0 16-7.2 16-16z" />
  </svg>
);

const SvgCloudFog = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudFog;