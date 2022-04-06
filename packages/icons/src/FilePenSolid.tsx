import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 64C0 28.65 28.65 0 64 0h160v128c0 17.7 14.3 32 32 32h128v139.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.8l-15.1 60.1c-2.3 9.4-1.7 19 1.4 27.8H64c-35.35 0-64-28.7-64-64V64zm256 64V0l128 128H256zm308.1 122.1c15.7 15.6 15.7 40.9 0 56.6l-29.4 29.4-70.9-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0l14.3 14.4zm-252.2 166 129.2-128.3 71 70.9-129.2 129.2c-4.1 4.1-9.3 7-14.9 8.4l-60.1 15.1c-5.5 1.3-11.2-.3-15.2-4.2-4-4-5.6-9.8-4.2-16.1l15-59.3c1.4-5.6 4.3-10.7 8.4-15.7z" />
  </svg>
);

const SvgFilePenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilePenSolid;
