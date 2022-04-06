import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 336c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zM352 0c53 0 96 42.98 96 96v256c0 46-32.4 84.4-75.6 93.8l38.9 38.9c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L329.4 448H118.6l-59.29 59.3c-6.24 6.3-16.37 6.3-22.62 0-6.25-6.2-6.25-16.4 0-22.6l38.86-38.9C32.36 436.4 0 398 0 352V96C0 42.98 42.98 0 96 0h256zm0 32H96c-35.35 0-64 28.65-64 64v128h384V96c0-35.35-28.7-64-64-64zM96 416h256c35.3 0 64-28.7 64-64v-96H32v96c0 35.3 28.65 64 64 64z" />
  </svg>
);

const SvgTrain = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrain;
