import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm80 290.7c0 51.4-43.1 93.3-96 93.3s-96-41.86-96-93.33V280c0-13.2 10.8-24 24-24s24 10.8 24 24v10.67c0 25.03 21.5 45.33 48 45.33s48-20.3 48-45.3V152c0-13.2 10.8-24 24-24s24 10.75 24 24v138.7z" />
  </svg>
);

const SvgCircleJSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleJSolid;
