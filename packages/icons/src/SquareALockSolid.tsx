import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 32c35.3 0 64 28.65 64 64v65.1c-54.3 7.8-96.9 54.5-96.9 110.9v24.6c-9 5.7-17.2 14-22.9 24l-82.4-178.7c-3.9-8.5-12.4-13.9-21.8-13.9s-17.9 5.4-21.8 13.9l-96 208c-5.5 11.2-.3 26.3 11.7 31.9 11.2 5.5 26.3.3 31.9-11.7l12-27h124.4l12 27c4.1 8.7 12.7 13.9 20.9 13.9v96H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zM224 209.3l40 85.8h-80.9l40.9-85.8zM464 192c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 48c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgSquareALockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareALockSolid;
