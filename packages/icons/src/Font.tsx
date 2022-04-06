import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 448h-21.37L238.7 40.9c-5-11.87-24.47-11.87-29.47 0L37.37 448H16c-8.836 0-16 7.2-16 16s7.164 16 16 16h80c8.838 0 16-7.164 16-16s-7.2-16-16-16H72.12l40.64-96.25h222.5L375.9 448H352c-8.836 0-16 7.164-16 16s7.2 16 16 16h80c8.838 0 16-7.164 16-16s-7.2-16-16-16zM126.3 319.7 224 88.29l97.71 231.4H126.3z" />
  </svg>
);

const SvgFont = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFont;
