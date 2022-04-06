import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M231.7 14.37C234.5 5.812 242.4 0 251.4 0 262.8 0 272 9.232 272 20.62V384c0 4.9-2.3 9.6-6.2 12.6l-142.7 111c-3.6 2.9-9 4.4-12.7 4.4-13.94 0-23.9-13.4-19.85-26.8l50.85-166.9-130.38-94.2C4.1 219.1 0 211.1 0 202.6 0 187.9 11.9 176 26.59 176H180.3l51.4-161.63zm8.3 79.54L207.2 196.9c-2.1 6.6-9.1 11.1-15.2 11.1H43.33l126.07 91c5.5 4 7.9 11.1 5.9 17.7l-43.8 143.9 107.6-84.4.9-282.29z" />
  </svg>
);

const SvgStarSharpHalf = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarSharpHalf;
