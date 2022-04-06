import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M368 240H182.6l68.69-68.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-96 96C129.6 247.8 128 251.9 128 256s1.562 8.188 4.688 11.31l96 96c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L182.6 272H368c8.8 0 16-7.2 16-16s-7.2-16-16-16zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleArrowLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowLeft;
