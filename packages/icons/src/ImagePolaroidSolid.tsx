import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m145.7 230.6-46.67 64a15.997 15.997 0 0 0-1.334 16.68C100.5 316.6 105.1 320 112 320h224c5.9 0 11.32-3.246 14.11-8.449a16.01 16.01 0 0 0-.795-16.43l-85.33-128C261 162.7 256 160 250.7 160s-10.35 2.672-13.31 7.125L183.8 247.4l-12.2-16.8c-3-4.2-7.8-6.6-12.9-6.6s-9.9 2.4-13 6.6zM400 32H48C21.6 32 0 53.6 0 80v352c0 26.4 21.6 48 48 48h352c26.4 0 48-21.6 48-48V80c0-26.4-21.6-48-48-48zm-16 320H64V96h320v256zM128 192c17.62 0 32-14.38 32-32s-14.4-32-32-32-32 14.4-32 32 14.4 32 32 32z" />
  </svg>
);

const SvgImagePolaroidSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImagePolaroidSolid;
