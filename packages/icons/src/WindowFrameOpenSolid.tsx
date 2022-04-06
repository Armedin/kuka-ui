import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 32c0-17.62-14.38-32-32-32H64C46.38 0 32 14.38 32 32v256h448V32zM240 224H96V64h144v160zm176 0H272V64h144v160zm80 224h-16V320h-64v128H96V320H32v128H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 16 16h480c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16z" />
  </svg>
);

const SvgWindowFrameOpenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWindowFrameOpenSolid;
