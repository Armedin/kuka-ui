import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm128 274.9c0 1.453-.125 2.922-.406 4.344-4.375 23.83-17.56 47.7-37.09 67.27C322.3 370.7 290.2 384 256 384s-66.34-13.31-90.5-37.48c-49.91-49.91-49.91-131.1 0-181 47.9-48.02 128-50.22 178.5-4.92 9.875 8.844 10.72 24.02 1.875 33.89C337 204.4 321.8 205.2 312 196.4c-31.91-28.56-82.34-27.19-112.6 3.062-31.19 31.2-31.19 81.95 0 113.2 30.19 30.22 82.94 30.22 113.1 0 7.594-7.609 13.69-16 17.91-24.58H280C266.8 288 256 277.3 256 264s10.75-24 24-24h80c13.3 0 24 10.8 24 24v10.9z" />
  </svg>
);

const SvgCircleGSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleGSolid;
