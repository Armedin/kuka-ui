import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-32 242.9c0 1.453-.125 2.922-.406 4.344-4.375 23.83-17.56 47.7-37.09 67.27C290.3 370.7 258.2 384 224 384s-66.34-13.31-90.5-37.48c-49.91-49.91-49.91-131.1 0-181 47.9-48.02 128-50.22 178.5-4.92 9.875 8.844 10.72 24.02 1.875 33.89C305 204.4 289.8 205.2 280 196.4c-31.91-28.56-82.34-27.19-112.6 3.062-31.19 31.2-31.19 81.95 0 113.2 30.19 30.22 82.94 30.22 113.1 0 7.594-7.609 13.69-16 17.91-24.58H248C234.8 288 224 277.3 224 264s10.75-24 24-24h80c13.3 0 24 10.8 24 24v10.9z" />
  </svg>
);

const SvgSquareGSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareGSolid;
