import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H64C28.66 32 0 60.65 0 96v320c0 35.35 28.66 64 64 64h384c35.34 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.547 0 16.58 3.328 22.62 9.375L258.7 128H448c17.64 0 32 14.36 32 32v256zM336 272H176c-8.8 0-16 7.2-16 16 0 8.834 7.156 15.1 16 15.1h160c8.8 0 16-6.3 16-15.1s-7.2-16-16-16z" />
  </svg>
);

const SvgFolderMinus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderMinus;
