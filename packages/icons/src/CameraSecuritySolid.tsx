import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 112c-53.04 0-96 42.96-96 96s42.96 96 96 96 96-42.96 96-96c0-53.9-43-96-96-96zM384 0H64C28.62 0 0 28.62 0 64v288c0 35.38 28.62 64 64 64h72.75L76.5 450.9c-6.87 4.2-12.5 14.4-12.5 22.5v12C64 500 76 512 90.75 512h266.6c14.75 0 26.65-12 26.65-26.6v-11.9c0-8.25-5.625-18.38-12.62-22.62L311.3 416h72.75c35.38 0 64-28.62 64-64V64C448 28.62 419.4 0 384 0zM224 336c-70.78 0-127.1-57.33-127.1-128S154.23 80 224 80s128 57.33 128 128c0 70.7-57.3 128-128 128z" />
  </svg>
);

const SvgCameraSecuritySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCameraSecuritySolid;
