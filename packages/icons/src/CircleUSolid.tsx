import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm112 290.9c0 60.2-50.2 109.1-112 109.1s-112-48.94-112-109.1V168c0-13.25 10.75-24 24-24s24 10.8 24 24v122.9c0 33.7 28.7 61.1 64 61.1s64-27.41 64-61.09V168c0-13.25 10.75-24 24-24s24 10.75 24 24v122.9z" />
  </svg>
);

const SvgCircleUSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleUSolid;
