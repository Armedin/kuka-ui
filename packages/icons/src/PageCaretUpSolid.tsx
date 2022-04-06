import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M64 512c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h181.5c17 0 33.2 6.743 45.2 18.75l74.6 74.51c12 12.04 18.7 28.24 18.7 45.24V448c0 35.3-28.7 64-64 64H64zm116.2-314.8-75.7 82.6c-14.12 15.4-3.2 40.2 17.7 40.2h139.6c20.9 0 31.8-24.8 17.7-40.2l-75.7-82.6c-3-3.3-7.3-5.2-11.8-5.2-4.5 0-8.8 1.9-11.8 5.2z" />
  </svg>
);

const SvgPageCaretUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPageCaretUpSolid;
