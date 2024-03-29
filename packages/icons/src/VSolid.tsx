import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m381.5 76.33-160 384C216.6 472.2 204.9 480 192 480a32 32 0 0 1-29.53-19.68l-160-384c-6.797-16.31.906-35.05 17.22-41.84 16.38-6.859 35.08.922 41.84 17.22L192 364.8 322.5 51.7c6.766-16.3 25.47-24.09 41.84-17.22 16.26 6.8 23.96 25.53 17.16 41.85z" />
  </svg>
);

const SvgVSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVSolid;
