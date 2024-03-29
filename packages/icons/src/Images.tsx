import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M464 448H96c-35.35 0-64-28.65-64-64V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v272c0 53.02 42.98 96 96 96h368c8.836 0 16-7.164 16-16s-7.2-16-16-16zM224 152c13.26 0 24-10.75 24-24s-10.74-24-24-24c-13.25 0-24 10.75-24 24s10.8 24 24 24zm186.6-12.1c-11.28-15.81-38.5-15.94-49.1-.031l-44.03 61.43-6.969-8.941c-11.44-14.46-36.97-14.56-48.4.031L198.2 272.8c-7.2 9.1-8.2 21.5-2.7 31.5 5.3 8.8 15.6 15.7 26.9 15.7h259.2c11 0 21.17-5.805 26.54-15.09 0-.031-.031.031 0 0 5.656-9.883 5.078-21.84-1.578-31.15L410.6 139.9zm-184.4 148 58.25-75.61 20.09 25.66c4.348 5.545 17.6 10.65 25.59-.533l54.44-78.75 92.68 129.2H226.2zM512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h352c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 288c0 17.64-14.36 32-32 32H160c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32v224z" />
  </svg>
);

const SvgImages = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImages;
