import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M279.5 279.8c14.1 15.4 3.2 40.2-17.7 40.2H122.2c-20.9 0-31.82-24.8-17.7-40.2l75.7-82.6c3-3.3 7.3-5.2 11.8-5.2 4.5 0 8.8 1.9 11.8 5.2l75.7 82.6zM140.4 288h103.2L192 231.7 140.4 288zM0 448V64C0 28.65 28.65 0 64 0h181.5c17 0 33.2 6.743 45.2 18.75l74.6 74.51c12 12.04 18.7 28.24 18.7 45.24V448c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64zm352-309.5c0-8.5-3.4-16.6-9.4-22.6l-74.5-74.53c-6-6-15-9.37-22.6-9.37H64c-17.67 0-32 14.33-32 32v384c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32V138.5z" />
  </svg>
);

const SvgPageCaretUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPageCaretUp;
