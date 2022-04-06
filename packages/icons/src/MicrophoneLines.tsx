import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 352c53 0 96-43 96-96V96c0-53-43-96-96-96S96 43 96 96v160c0 53 43 96 96 96zM128 98.92c0-33.39 24.3-63.31 57.5-66.6C223.7 28.54 256 58.62 256 96h-48c-8.799 0-16 7.199-16 16 0 8.799 7.201 16 16 16h48v32h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v32h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c0 37.38-32.34 67.46-70.47 63.68C152.3 316.4 128 286.5 128 253.1V98.92zM336 192c-8.8 0-16 7.2-16 16v48c0 73.5-62.25 132.6-136.8 127.8C115.3 379.1 64 319.6 64 251.5V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v42.38c0 83.38 61.63 156.1 144 164.4V480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.801 0 16-7.201 16-16 0-8.801-7.199-16-16-16h-64v-65c80.8-8.1 144-76.2 144-159v-48c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgMicrophoneLines = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMicrophoneLines;
