import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.63 0 0 28.62 0 63.1v287.1c0 37.2 28.63 64.9 64 64.9h96v83.1c0 9.873 11.25 15.52 19.12 9.649L304 415.1h144c35.38 0 64-28.63 64-63.1V63.1C512 28.62 483.4 0 448 0zM249.1 320c-13.7 0-25.1-11.4-25.1-26s11.4-26 25.1-26c15.5 0 26.9 11.4 26.9 26s-11.4 26-26.9 26zm58.6-116.6-38.33 23.13v1.652c0 10.74-9.168 19.83-20 19.83-10.83 0-20-9.088-20-19.83V214.1c0-6.609 3.332-13.22 10-17.35l47.5-28.09c5.83-2.46 9.13-8.26 9.13-14.86 0-9.914-8.334-18.17-18.33-18.17H234.3c-10 0-18.33 8.26-18.33 18.17 0 10.74-9.166 19.83-20 19.83S176 164.6 176 153.8c0-32.2 25.8-57.8 58.3-57.8h43.33C310.2 96 336 121.6 336 153.8c0 19.9-10.8 38.9-28.3 49.6z" />
  </svg>
);

const SvgMessageQuestionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageQuestionSolid;
