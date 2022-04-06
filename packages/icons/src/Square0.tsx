import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 128c-52.9 0-96 43.1-96 96v64c0 52.94 43.06 96 96 96s96-43.06 96-96v-64c0-52.9-43.1-96-96-96zm64 160c0 35.28-28.72 64-64 64s-64-28.72-64-64v-64c0-35.28 28.72-64 64-64s64 28.72 64 64v64zm96-256H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgSquare0 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare0;
