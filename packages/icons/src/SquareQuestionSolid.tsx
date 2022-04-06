import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM224 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32s-14.9 32-32 32zm69.1-142L248 286v2c0 13-11 24-24 24s-24-11-24-24v-16c0-8 4-16 12-21l57-34c7-4 11-11 11-19 0-12-10-22-22-22h-52c-12.9 0-22 10-22 22 0 13-11 24-24 24s-24-11-24-24c0-39 31-70 69.1-70h52c39.9 0 70.9 31 70.9 70 0 24-13 47-34.9 60z" />
  </svg>
);

const SvgSquareQuestionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareQuestionSolid;
