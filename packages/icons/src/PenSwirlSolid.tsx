import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M296.1 68.38C283.8 65.51 270.1 64 256 64 149.1 64 64 149.1 64 256c0 106 85.1 192 192 192 17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0c32.4 0 63.3 6.005 91.8 16.96l-51.7 51.42zm14.5 281.02c5.5-1.7 11.4-2 16.5-1.3 8.5 2.8 16.6 3.9 24.9 3.9 53 0 96-43 96-96.9 0-12.8-1.4-27-4.2-39l51.4-51.4c10.9 28.3 16.8 59.1 16.8 90.4 0 89.3-71.6 160.9-160 160.9-13.8 0-27.2-1.7-40-5.9-17.1-3.5-27.4-21-23-39 .8-2.4 2.2-5.4 3.8-8.1 6.4-3.8 12.4-8.4 17.8-13.6zM495.8 37.88c18.9 18.89 18.7 49.55-.3 68.22l-39.8 39-89.3-89.36 39.7-39.72c18.7-18.756 49.1-18.762 67.8-.01l21.9 21.87zM200.5 221.8 343.7 78.37l89.1 89.13-145.2 142.1c-6.9 6.8-15.3 11.9-24.5 15l-71.5 23.9c-9.5 2.9-18.1.6-24.6-5.8-6.4-6.4-8.6-15.9-5.8-24.6l23.8-71.3c3.1-9.4 8.4-18 15.5-25z" />
  </svg>
);

const SvgPenSwirlSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenSwirlSolid;
