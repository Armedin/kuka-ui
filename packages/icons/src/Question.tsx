import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M213.1 32H106.7C47.84 32 0 79.84 0 138.7V160c0 8.844 7.156 16 16 16s16-7.1 16-16v-21.3C32 97.48 65.5 64 106.7 64h106.5c41.2 0 74.8 33.58 74.8 74.9 0 27-14.62 52-38.16 65.25L152.5 258.9c-15.1 8.5-24.5 24.5-24.5 41.8V336c0 8.844 7.156 16.01 16 16.01s16-7.21 16-16.01v-35.3c0-5.766 3.125-11.11 8.156-13.95l97.38-54.78C299.1 213.1 320 177.4 320 138.9 320 79.94 272.1 32 213.1 32zM144 400c-17.67 0-32 14.32-32 31.99s14.33 32 32 32 32-14.33 32-32S161.7 400 144 400z" />
  </svg>
);

const SvgQuestion = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgQuestion;
