import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM96 448c0-52.94 43.07-96 96-96h64c52.94 0 96 43.06 96 96H96zm320-32c0 17.64-14.36 32-32 32 0-70.69-57.31-128-128-128h-64c-70.69 0-128 57.31-128 128-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM224 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c44.18 0 80-35.82 80-80 0-44.2-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.53 48 48-21.5 48-48 48z" />
  </svg>
);

const SvgSquareUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareUser;
