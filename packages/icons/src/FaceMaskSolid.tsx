import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M368 255.1H207.1c-17.5 0-33.6 11.3-41.6 26.6L34.24 221.1C50.87 96.68 158.1 0 288 0c129.9 0 237.1 96.68 253.8 221.1l-131.3 60.6c-8-15.3-24.1-26.6-42.5-26.6zm-212.7-51.8c7.6-7.6 36.8-27.3 84.7-27.3 8.8 0 16-7.2 16-16s-7.2-16-16-16c-55.4 0-93.6 22.1-107.3 36.7-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0zM336 176c47 0 77.1 19.7 84.7 27.3 6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6C429.6 166.1 391.4 144 336 144c-8.8 0-16 7.2-16 16s7.2 16 16 16zm80 138.3 128-58.2c-.9 46.6-12.5 90.3-34.2 127.9H416v-69.7zM413.3 416h74.6c-47 58.5-119.1 96-199.9 96-80.8 0-152.9-37.5-199.85-96h74.55c6.6 18.6 24.4 32 44.4 32H368c20.9 0 38.7-13.4 45.3-32zm-254.2-32H66.25C44.49 346.4 32.02 302.7 32 256.1l127.1 58.2V384zM368 304c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h160zm0 64c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h160z" />
  </svg>
);

const SvgFaceMaskSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceMaskSolid;
