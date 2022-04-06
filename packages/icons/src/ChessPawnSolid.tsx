import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M105.1 224H80c-8.88 0-16 7.1-16 16v32c0 8.875 7.125 15.1 16 15.1l16 .9v5.5c0 44-4.12 86.6-24 122.5h176c-19.9-35.9-24-78.5-24-122.5V288h16c8.875 0 16-7.125 16-15.1v-32c0-9.8-7.1-16.9-16-16.9h-25.12C244.3 205.6 264 173.2 264 136c0-57.5-46.5-104-104.9-104S56 78.5 56 136c0 37.2 19.74 69.6 49.1 88zM272 448H47.1C21.49 448 0 469.5 0 495.1c0 9.7 7.163 16.9 16 16.9h288c8.837 0 16-7.163 16-16 0-26.5-21.5-48-48-48z" />
  </svg>
);

const SvgChessPawnSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChessPawnSolid;
