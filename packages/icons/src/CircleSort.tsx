import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M347.1 288H164.6c-16.4 0-24.5 19.9-12.8 31.4l91.2 91.2c3.4 3.5 8.1 5.4 13 5.4s9.594-2 13.09-5.375l91.03-91.25C371.8 307.9 363.5 288 347.1 288zM256 378.4 197.6 320h116.6L256 378.4zm13.1-277c-3.5-4.3-8.2-6.3-13.1-6.3s-9.6 2.77-13 6.3l-91.2 91.2c-11.7 11.5-3.6 31.4 12.8 31.4h182.6c16.38 0 24.62-19.88 13-31.38l-91.1-91.22zM197.6 192l58.4-58.4 58.3 58.4H197.6zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleSort = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleSort;
