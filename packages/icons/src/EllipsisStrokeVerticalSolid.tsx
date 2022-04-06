import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M96 488c-39.76 0-72-32.2-72-72s32.24-72 72-72c39.8 0 72 32.2 72 72s-32.2 72-72 72zm24-72c0-13.3-10.7-24-24-24-13.25 0-24 10.7-24 24s10.75 24 24 24c13.3 0 24-10.7 24-24zm-24-88c-39.76 0-72-32.2-72-72s32.24-72 72-72c39.8 0 72 32.2 72 72s-32.2 72-72 72zm24-72c0-13.3-10.7-24-24-24-13.25 0-24 10.7-24 24s10.75 24 24 24c13.3 0 24-10.7 24-24zM96 24c39.8 0 72 32.24 72 72 0 39.8-32.2 72-72 72-39.76 0-72-32.2-72-72 0-39.76 32.24-72 72-72zM72 96c0 13.3 10.75 24 24 24 13.3 0 24-10.7 24-24 0-13.25-10.7-24-24-24-13.25 0-24 10.75-24 24z" />
  </svg>
);

const SvgEllipsisStrokeVerticalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEllipsisStrokeVerticalSolid;
