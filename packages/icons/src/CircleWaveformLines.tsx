import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 136c-8.836 0-16 7.162-16 16v208c0 8.836 7.164 16 16 16s16-7.164 16-16V152c0-8.8-7.2-16-16-16zm-64 64c-8.8 0-16 7.2-16 16v80c0 8.836 7.164 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16zm-64-40c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16zm256 64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm80-296c-8.836 0-16 7.162-16 16v112c0 8.836 7.164 16 16 16s16-7.164 16-16V200c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgCircleWaveformLines = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleWaveformLines;
