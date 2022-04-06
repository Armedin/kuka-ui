import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.71-192-80c-5.875-2.5-12.16-3.703-18.44-3.703S243.5 1.203 237.6 3.703L45.61 83.71C27.73 91.08 16 108.6 16 127.1 16 385.4 205.4 512 255.9 512 305.2 512 496 387.3 496 127.1c0-18.5-11.7-36.02-29.5-43.39zm-2.6 44.59c0 225.3-166.2 351.7-207.8 351.7C213.3 479.1 48 352.2 48 128c0-6.5 3.875-12.25 9.75-14.75l192-80a16.221 16.221 0 0 1 6.258-1.266c2.071 0 4.154.407 6.117 1.266l192 80c9.175 3.85 9.775 12.55 9.775 15.05zm-127.9 53a15.933 15.933 0 0 0-11.31 4.688L229.3 281.4l-42-42c-3.1-3.2-7.2-4.7-11.3-4.7-9.139 0-16 7.473-16 16 0 4.094 1.562 8.188 4.688 11.31l53.34 53.33C221.2 318.4 225.3 320 229.3 320s8.188-1.562 11.31-4.688l106.7-106.7A16.064 16.064 0 0 0 352 197.3c0-8.5-6.9-16-16-16z" />
  </svg>
);

const SvgShieldCheck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldCheck;
