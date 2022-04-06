import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c95.7 0 174.1 69.96 189.6 161.5-53.1 8.8-93.6 54.9-93.6 110.5v24.6c-19.1 11-32 31.7-32 55.4v94.8c-15.3 20.6-29.3 38.6-40.3 52.4-12.3 15.3-35.1 15.3-47.4 0zM192 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm208-64c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 48c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgLocationPinLockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationPinLockSolid;
