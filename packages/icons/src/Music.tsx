import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M481.5 0c-3.25 0-6.375.5-9.25 1.5l-290.9 96C168.8 101.8 160 114 160 128v244.8C143 360 120.7 352 95.1 352 42.1 352 0 387.8 0 432s42.1 80 95.1 80 95.1-35.7 95.1-79.95L192 256l288-96v148.8C463 296 440.7 288 415.1 288c-53 0-95.1 35.75-95.1 79.1s42.1 79.1 95.1 79.1 95.1-35.75 95.1-80L512 31.99C512 13.74 497.8 0 481.5 0zM96 480c-34.75 0-64-21.1-64-48 0-26 29.25-48 64-48s64 22 64 48-29.2 48-64 48zm320-64c-34.75 0-64-21.1-64-48 0-25.1 29.25-48 64-48s64 22 64 48-29.2 48-64 48zm64-289.8-288 96V128h-.5L480 32.62v93.58z" />
  </svg>
);

const SvgMusic = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMusic;
