import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M312 64c15.8 0 30.1 9.3 36.5 23.73 5.6 14.47 3.8 31.27-6.8 43.07L240 243.8V416c0 12.1-6.8 23.2-17.7 28.6-10.8 5.4-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V243.8l-101.73-113C-.3 119-2.968 102.2 3.459 87.73 9.885 73.3 24.2 64 39.1 64H312zm168 320c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h128zM320 256c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-17.7 0-32-14.3-32-32zM480 64c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32 0-17.67 14.3-32 32-32h64z" />
  </svg>
);

const SvgFilterListSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilterListSolid;
