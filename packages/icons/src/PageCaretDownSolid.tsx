import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M64 512c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h181.5c17 0 33.2 6.743 45.2 18.75l74.6 74.51c12 12.04 18.7 28.24 18.7 45.24V448c0 35.3-28.7 64-64 64H64zm139.8-165.2 75.7-82.6c14.1-15.4 3.2-40.2-17.7-40.2H122.2c-20.9 0-31.82 24.8-17.7 40.2l75.7 82.6c3 3.3 7.3 5.2 11.8 5.2 4.5 0 8.8-1.9 11.8-5.2z" />
  </svg>
);

const SvgPageCaretDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPageCaretDownSolid;
