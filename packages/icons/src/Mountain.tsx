import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M503.2 393.8 280.1 44.25C274.9 36.08 265.4 32 256 32c-9.4 0-18.9 4.08-24.1 12.25L8.807 393.8a55.906 55.906 0 0 0-1.666 57.45C17.07 468.1 35.92 480 56.31 480h399.4c20.39 0 39.24-11.03 49.18-28.77 10.01-18.03 9.41-40.03-1.69-57.43zM256 66.01 346.6 208H256a16.003 16.003 0 0 0-12.8 6.406L208 261.3l-35.2-46.9c-2-2.7-5-4.3-8.1-5.3L256 66.01zM476.9 435.6c-4.2 7.6-12.4 12.4-21.2 12.4H56.31c-8.826 0-16.97-4.752-21.25-12.39-4.31-7.71-4.04-17.11.72-24.61L144.9 240h7.1l43.2 57.59c3 4.01 6.9 6.41 12.8 6.41s9.781-2.375 12.8-6.406L264 240h103.1l109.2 171c3.8 7.5 5 16.9.6 24.6z" />
  </svg>
);

const SvgMountain = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMountain;
