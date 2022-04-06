import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M342.6 246.6c20-20.1 5.9-54.6-22.6-54.6H128c-28.36 0-42.72 34.5-22.6 54.6l95.95 96c12.49 12.5 32.86 12.5 45.35 0l95.9-96zM128 224h192l-96 96-96-96zm320 192V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.3 0 64-28.7 64-64zM64 448c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64z" />
  </svg>
);

const SvgSquareCaretDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareCaretDown;
