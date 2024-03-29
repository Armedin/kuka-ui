import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.9 483.4 25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4zM512 64c17.64 0 32 14.36 32 32v255.3l32 25.26L575.1 96c0-35.35-28.65-64-64-64H139.6l40.53 32H512zm-174.3 93.8-13.31 20.12 24.03 18.97 13.81-21.4 44.76 67.65 80.35 63.43-98.41-148.7C377.6 140.5 349 140.5 337.7 157.8zm-137.5 84.3-66.4 92.04c-6.797 9.406-7.75 21.72-2.547 32C136.5 377.5 147 384 158.8 384h220.1l-40.53-32H159.8l64.36-90.13-23.96-19.77zM459.9 448H128c-17.64 0-32-14.36-32-32V160.7l-32-25.3-.01 280.6c0 35.35 28.65 64 64 64h372.5l-40.59-32z" />
  </svg>
);

const SvgImageSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImageSlash;
