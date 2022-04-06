import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-164.1-69.5c5.8 6.7 15.9 7.4 22.6 1.6 6.7-5.8 7.4-15.9 1.6-22.6-22.3-25.6-61-53.5-116.1-53.5-55.1 0-93.8 27.9-116.1 53.5-5.8 6.7-5.1 16.8 1.6 22.6 6.7 5.8 16.8 5.1 22.6-1.6 17.9-20.7 48.5-43.4 91.9-43.4 43.4 0 73.1 22.7 91.9 43.4zM335.6 336c17.7 0 32-14.3 32-32s-14.3-32-32-32c-18.5 0-32 14.3-32 32s13.5 32 32 32zm-160-64c-18.5 0-32 14.3-32 32s13.5 32 32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgFaceSmileUpsideDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSmileUpsideDownSolid;
