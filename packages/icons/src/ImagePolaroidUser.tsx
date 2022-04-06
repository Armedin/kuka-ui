import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32v-32h384v32zm-269.1-64c6.6-18.6 24.2-32 45.1-32h64c20.87 0 38.45 13.4 45.06 32H146.9zm269.1 0h-81.61c-8.29-36.5-39.69-64-78.39-64h-64c-38.7 0-70.97 27.48-78.39 64H32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v256zM224 128c-35.3 0-64 28.7-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zm0 96c-17.6 0-32-14.4-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgImagePolaroidUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImagePolaroidUser;
