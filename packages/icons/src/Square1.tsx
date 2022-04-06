import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M288 352h-48V144c0-5.906-3.25-11.31-8.453-14.09-5.172-2.812-11.5-2.5-16.42.781l-48 32C159.8 167.6 157.8 177.5 162.7 184.9c4.875 7.344 14.8 9.312 22.19 4.438L208 173.9V352h-48c-8.844 0-16 7.156-16 16s7.2 16 16 16h128c8.844 0 16-7.156 16-16s-7.2-16-16-16zm96-320H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgSquare1 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare1;
