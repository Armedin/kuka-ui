import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-80 258.7c0 51.4-43.1 93.3-96 93.3s-96-41.86-96-93.33V280c0-13.2 10.8-24 24-24s24 10.8 24 24v10.67c0 25.03 21.5 45.33 48 45.33s48-20.3 48-45.3V152c0-13.2 10.8-24 24-24s24 10.75 24 24v138.7z" />
  </svg>
);

const SvgSquareJSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareJSolid;
