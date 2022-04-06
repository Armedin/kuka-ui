import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-160 96c39.77 0 72 32.23 72 72 0 39.76-32.23 72-72 72-39.76 0-72-32.24-72-72 0-39.8 32.2-72 72-72zM81.61 416c7.83-54.2 53.99-96 110.39-96h64c56.38 0 102.6 41.79 110.4 96H81.61z" />
  </svg>
);

const SvgSquareUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareUserSolid;
