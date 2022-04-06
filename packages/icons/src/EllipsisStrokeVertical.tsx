import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M96 480c-35.35 0-64-28.7-64-64s28.65-64 64-64c35.3 0 64 28.7 64 64s-28.7 64-64 64zm32-64c0-17.7-14.3-32-32-32-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32zm-32-96c-35.35 0-64-28.7-64-64s28.65-64 64-64c35.3 0 64 28.7 64 64s-28.7 64-64 64zm32-64c0-17.7-14.3-32-32-32-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32zM96 32c35.3 0 64 28.65 64 64 0 35.3-28.7 64-64 64-35.35 0-64-28.7-64-64 0-35.35 28.65-64 64-64zM64 96c0 17.7 14.33 32 32 32 17.7 0 32-14.3 32-32 0-17.67-14.3-32-32-32-17.67 0-32 14.33-32 32z" />
  </svg>
);

const SvgEllipsisStrokeVertical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEllipsisStrokeVertical;
