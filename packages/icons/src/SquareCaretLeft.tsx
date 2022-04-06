import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M233.4 374.6c20.1 20 54.6 5.9 54.6-22.6V160c0-28.4-34.5-42.7-54.6-22.6l-96 95.95c-12.5 12.49-12.5 32.86 0 45.35l96 95.9zM256 160v192l-96-96 96-96zM64 480h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.3 28.65 64 64 64zM32 96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96z" />
  </svg>
);

const SvgSquareCaretLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareCaretLeft;
