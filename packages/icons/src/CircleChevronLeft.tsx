import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M299.3 132.7c-6.25-6.25-16.38-6.25-22.62 0l-112 112c-3.08 3.1-4.68 7.2-4.68 11.3s1.562 8.188 4.688 11.31l112 112c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L198.6 256l100.7-100.7c6.3-6.2 6.3-16.4 0-22.6zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleChevronLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleChevronLeft;
