import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM352 96H224c-8.8 0-16 7.2-16 16v98.94c-18.6 6.66-32 24.26-32 45.06 0 26.47 21.53 48 48 48s48-21.53 48-48c0-20.83-13.42-38.43-32-45.06V128h112v256H96V128h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-17.64 0-32 14.4-32 32v256c0 17.64 14.36 32 32 32h256c17.64 0 32-14.36 32-32V128c0-17.6-14.4-32-32-32zM224 272c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.172 16 16-7.2 16-16 16z" />
  </svg>
);

const SvgNfc = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNfc;
