import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 224v64c0 17.67-14.33 32-32 32H224v96a32 32 0 0 1-54.63 22.622l-160-160C3.125 272.4 0 264.2 0 256s3.125-16.38 9.375-22.62l160-160a32.003 32.003 0 0 1 34.88-6.938A32 32 0 0 1 224 96v96h192c17.7 0 32 14.3 32 32z" />
  </svg>
);

const SvgLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeftSolid;
