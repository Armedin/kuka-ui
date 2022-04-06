import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 360c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm256 8H176c-8.8 0-16 7.2-16 16s7.156 16 16 16h176c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-250.7-80c4.094 0 8.188-1.562 11.31-4.688l58.67-58.67c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L101.3 249.4l-17.99-18c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l29.33 29.33c3.12 3.05 7.21 4.65 11.28 4.65zM96 152c13.26 0 24-10.75 24-24 0-13.26-10.74-24-24-24-13.25 0-24 10.7-24 24s10.75 24 24 24zm256 88H208c-8.8 0-16 7.2-16 16s7.156 16 16 16h144c8.844 0 16-7.156 16-16s-7.2-16-16-16zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v384zm-64-336H176c-8.8 0-16 7.2-16 16s7.156 16 16 16h176c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgBallotCheck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBallotCheck;
