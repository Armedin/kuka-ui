import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-372.1 90.5c22.3 25.6 61 53.5 116.1 53.5 8.8 0 16-7.2 16-16s-7.2-16-16-16c-43.4 0-74-21.8-91.9-42.5-5.8-6.7-15.9-7.4-22.6-1.6-6.7 5.8-7.4 15.9-1.6 22.6zM352 416c26.5 0 48-21 48-47 0-20-28.6-60.4-41.6-77.7-3.2-4.4-9.6-4.4-12.8 0C332.4 308.6 304 349 304 369c0 26 21.5 47 48 47zM176.4 176c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 64c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
  </svg>
);

const SvgFaceSmileTearSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSmileTearSolid;
