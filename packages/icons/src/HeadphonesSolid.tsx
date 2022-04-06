import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m512 287.9-.004 112C511.1 444.1 476.1 480 432 480c-26.47 0-48-21.56-48-48.06V304.1c0-26.5 21.5-48.1 48-48.1 10.83 0 20.91 2.723 30.3 6.678C449.7 159.1 362.1 80.13 256 80.13S62.29 159.1 49.7 262.7c9.39-4 19.47-6.7 30.3-6.7 26.5 0 48 21.6 48 48.1V432c0 26.4-21.5 48-48 48C35.89 480 .9 444.12.9 399.94L0 288C0 146.8 114.8 32 256 32c140.9 0 255.6 114.5 255.1 255.3 0 .2 0 .4.9.6z" />
  </svg>
);

const SvgHeadphonesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeadphonesSolid;
