import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M489.1 264.9C480.5 207.5 450.5 32 392.3 32c-14 0-26.58 5.875-37.08 14-20.75 15.87-49.62 15.87-70.5 0-10.52-8-23.02-14-37.02-14-58.25 0-88.27 175.5-97.77 232.9C188.7 277.5 243.7 288 319.1 288s132.1-10.5 170-23.1zm143.8-37.2c-6.125-4.125-14.2-3.51-19.7 1.49-1 .875-101.3 90.77-293.1 90.77-190.9 0-292.2-89.99-293.2-90.86-5.5-4.875-13.71-5.508-19.71-1.383-6.125 4.125-8.587 11.89-6.087 18.77C1.749 248.5 78.37 448 319.1 448s318.2-199.5 318.1-201.5c4.3-6.9 1.8-14.6-4.3-18.8z" />
  </svg>
);

const SvgHatCowboySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHatCowboySolid;
