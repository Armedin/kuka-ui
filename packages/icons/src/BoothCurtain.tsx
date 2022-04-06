import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 32v464c0 8.8 7.2 16 15.1 16S32 504.8 32 496V32h64l-.9 349.5c0 35.29 27.49 65.79 62.78 66.47 20.62.43 38.12-8.47 50.12-22.07 11.8 13.3 28.8 22.1 48 22.1s36.25-8.75 48-22.12C315.8 439.2 332.8 448 352 448s36.25-8.75 48-22.12C411.8 439.2 428.8 448 448 448c11.75 0 22.5-3.375 32-8.875v56.88C480 504.8 487.2 512 496 512s16-7.2 16-16V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32zm416 0h64v352c0 17.75-14.25 32-32 32s-32-14.25-32-32V32zm-96 0h64v352c0 17.75-14.25 32-32 32s-32-14.25-32-32V32zm-96 0h64v352c0 17.75-14.25 32-32 32s-32-14.25-32-32V32zm-96 0h64v352c0 17.75-14.25 32-32 32s-32-14.25-32-32V32z" />
  </svg>
);

const SvgBoothCurtain = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoothCurtain;
