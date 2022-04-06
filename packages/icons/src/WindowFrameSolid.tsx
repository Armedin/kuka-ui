import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 448h-16V32c0-17.62-14.38-32-32-32H64C46.38 0 32 14.38 32 32v416H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 16 16h480c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16zm-80-224H272V64h144v160zM96 64h144v160H96V64zm0 224h144v160H96V288zm176 160V288h144v160H272z" />
  </svg>
);

const SvgWindowFrameSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWindowFrameSolid;
