import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M288 336H96a16.013 16.013 0 0 0-15.05 10.56c-2.297 6.312-.375 13.41 4.797 17.72L176 439.5V496c0 8.844 7.156 16 16 16s16-7.2 16-16v-56.51l90.25-75.21c5.172-4.312 7.094-11.41 4.797-17.72C300.8 340.2 294.7 336 288 336zm-96 75.2L140.2 368h103.6L192 411.2zm0-107.2c26.47 0 48-21.53 48-48 0-8.844-7.156-16-16-16s-16 7.2-16 16c0 8.812-7.172 16-16 16-8.8 0-16 7.2-16 16s7.2 16 16 16zm0-304C90.5 0 8 82.53 8 183.1c0 41.25 13.1 80.66 40.48 113.1 5.469 6.875 15.53 8.062 22.47 2.562 6.922-5.5 8.062-15.56 2.562-22.5C51.59 250.5 40 217.9 40 184c0-83.8 68.2-152 152-152s152 68.19 152 152c0 33.94-11.59 66.47-33.52 94.03-5.5 6.938-4.359 17 2.562 22.5C315.1 302.9 319.5 304 322.1 304c4.719 0 9.375-2.062 12.53-6.031C361.1 264.7 376 225.3 376 184 376 82.53 293.5 0 192 0zm0 208c26.47 0 48-21.53 48-48 0-8.844-7.156-16-16-16s-16 7.2-16 16c0 8.812-7.172 16-16 16-8.8 0-16 7.2-16 16s7.2 16 16 16zm112-32c-8.8 0-16 7.2-16 16 0 8.812-7.172 16-16 16-8.8 0-16 7.2-16 16s7.156 16 16 16c26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgGolfBallTee = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGolfBallTee;