import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M347.4 288H164.9c-16.38 0-24.62 19.88-13 31.38L243 410.6c3.5 3.4 8.1 5.4 13 5.4s9.719-1.875 13.09-5.375l91.16-91.25C371.9 307.9 363.8 288 347.4 288zM256 378.4 197.8 320h116.6L256 378.4zm11.3-277.6c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.08 6.2-5.88 16.1.22 22.2 6.2 6.1 16.1 6.3 22.4.3l84.7-84.7 84.75 84.63c6.25 6 16.12 5.875 22.25-.25s6.25-16 .25-22.25L267.3 100.8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleSortDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleSortDown;
