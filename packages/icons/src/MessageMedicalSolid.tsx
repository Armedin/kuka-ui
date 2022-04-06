import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.72 0-.9 28.62-.9 63.1v287.1c0 35.38 28.62 63.1 64 63.1h96v83.1c0 4.5 2.5 8.624 6.625 10.75 4 2 8.875 1.651 12.5-1.099l124.9-93.65h144c35.38 0 64-28.62 64-63.1V63.1C511.1 28.62 483.4 0 447.1 0zM368 234c0 8.836-7.164 16-16 16h-54v54c0 8.836-7.163 16-16 16h-52c-8.835 0-16-7.164-16-16v-54h-54c-8.836 0-16-7.164-16-16v-52c0-8.838 7.164-16 16-16h53.1v-54c0-8.838 7.165-16 16-16h52c8.837 0 16 7.162 16 16v54H352c8.836 0 16 7.162 16 16v52z" />
  </svg>
);

const SvgMessageMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageMedicalSolid;
