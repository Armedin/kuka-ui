import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 64v383.1c0 12.59-7.337 24.01-18.84 29.16C296.1 479.1 292.4 480 288 480a32.039 32.039 0 0 1-21.27-8.094l-134.9-119.9H48c-26.51 0-48-21.49-48-47.1V208c0-26.51 21.49-47.1 48-47.1h83.84L266.74 41c9.422-8.375 22.93-10.45 34.43-5.259C312.7 39.1 320 51.41 320 64z" />
  </svg>
);

const SvgVolumeOffSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVolumeOffSolid;
