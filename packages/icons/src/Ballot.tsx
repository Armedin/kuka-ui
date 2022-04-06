import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 232c-13.25 0-24 10.7-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm0 128c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm0-256c-13.25 0-24 10.7-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-10.7-24-24-24zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v384zm-64-80H176c-8.8 0-16 7.2-16 16s7.156 16 16 16h176c8.844 0 16-7.156 16-16s-7.2-16-16-16zm0-256H176c-8.8 0-16 7.2-16 16s7.156 16 16 16h176c8.844 0 16-7.156 16-16s-7.2-16-16-16zm0 128H176c-8.8 0-16 7.2-16 16s7.156 16 16 16h176c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgBallot = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBallot;
