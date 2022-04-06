import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 128H208V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v112H64c-35.3 0-64 28.7-64 64v16c0 8.8 7.156 16 16 16s16-7.2 16-16v-16c0-17.66 14.36-32 32-32h48v240c0 3.156.938 6.25 2.688 8.875l64.04 96C181.7 509.3 186.7 512 191.1 512s10.39-2.688 13.35-7.125l63.96-96C271.1 406.3 272 403.2 272 400V160h48c17.64 0 32 14.34 32 32v16c0 8.8 7.2 16 16 16s16-7.2 16-16l-.9-16c0-35.3-27.8-64-63.1-64zm-80 267.2-48 72-48-72V160h96v235.2z" />
  </svg>
);

const SvgDagger = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDagger;
