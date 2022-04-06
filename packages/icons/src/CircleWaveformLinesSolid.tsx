import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-96 336c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v160zm64-40c0 8.836-7.164 16-16 16s-16-7.2-16-16v-80c0-8.838 7.164-16 16-16s16 7.2 16 16v80zm64 64c0 8.836-7.164 16-16 16s-16-7.164-16-16V152c0-8.838 7.164-16 16-16s16 7.2 16 16v208zm64-48c0 8.836-7.164 16-16 16s-16-7.2-16-16V200c0-8.838 7.164-16 16-16s16 7.2 16 16v112zm64-40c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32z" />
  </svg>
);

const SvgCircleWaveformLinesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleWaveformLinesSolid;
