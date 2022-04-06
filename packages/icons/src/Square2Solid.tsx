import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-88 352H152a23.98 23.98 0 0 1-22.39-15.38c-3.578-9.25-1.078-19.75 6.266-26.41l108.4-98.31c7.047-6.938 11.31-17 11.31-27.66s-4.266-20.72-12-28.31C227.4 172 200.9 172 184.6 187.9l-11 10.8c-9.5 9.4-25.5 9.2-33.9-.3-9.3-9.5-9.2-24.7.3-33.9l11-10.78c34.8-34.19 91.45-34.19 126.3 0 17 16.69 26.38 38.91 26.38 62.56s-9.375 45.88-26.38 62.56L214.2 336H296c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgSquare2Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare2Solid;
