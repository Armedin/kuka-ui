import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m164.6 223.1 182.5.9c16.38 0 24.62-19.88 13-31.38L269 101.4c-3.5-4.3-8.1-6.3-13-6.3s-9.7 2.77-13.1 6.3l-91.1 91.2c-11.7 11.5-3.6 30.5 12.8 30.5zm91.4-89.5 58.3 58.4H197.6l58.4-58.4zm84.8 159.2L256 377.4l-84.7-84.6c-6.3-6-16.2-5.9-22.3.2s-6.25 16-.25 22.25l96 96a15.844 15.844 0 0 0 22.5 0l96-96c6-6.25 5.875-16.12-.25-22.25s-16-6.2-22.2-.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleSortUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleSortUp;
