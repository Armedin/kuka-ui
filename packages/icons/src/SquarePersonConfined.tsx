import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 248v112c0 30.9-25.1 56-56 56-25.1 0-48.8-11.5-64.4-31.3l-53.5-68.1-52.2 91.3c-4.4 7.7-14.2 10.4-21.8 6-7.71-4.4-10.38-14.2-5.99-21.8l63.99-112c2.6-4.7 7.4-7.7 12.7-8.1 5.3-.3 10.5 1.9 13.8 6.1l51.4 65.5V248c0-30.9 25.1-56 56-56s56 25.1 56 56zm-32 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V248zm-56-96c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm-56-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32z" />
  </svg>
);

const SvgSquarePersonConfined = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquarePersonConfined;
