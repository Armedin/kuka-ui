import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM96 416H64V288h32v128zm0-192H64V96h32v128zm96 192h-32V288h32v128zm0-192h-32V96h32v128zm96 192h-32V288h32v128zm0-192h-32V96h32v128zm96 192h-32V288h32v128zm0-192h-32V96h32v128z" />
  </svg>
);

const SvgGrateSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGrateSolid;
