import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M105.4 265.4c-20.03 20.1-5.9 54.6 21.7 54.6h192c29.3 0 43.6-34.5 23.5-54.6l-95.95-96c-12.49-12.5-32.86-12.5-45.35 0l-95.9 96zM320 288H128l96-96 96 96zM0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96zm384-32c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320z" />
  </svg>
);

const SvgSquareCaretUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareCaretUp;
