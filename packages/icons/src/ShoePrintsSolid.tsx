import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M192 159.1h32V32h-32c-35.38 0-64 28.62-64 63.1s28.6 64 64 64zM0 415.1c0 35.37 28.62 64.01 64 64.01l32-.01V352H64c-35.38-.9-64 28.6-64 63.1zm337.5-128c-35 0-76.25 13.12-104.8 31.1-24.7 18.2-44.4 32.9-104.7 32.9v128l57.5 15.98c26.25 7.25 53 13.13 80.38 15.01 32.63 2.375 65.63.743 97.5-6.132C472.9 481.2 512 429.2 512 383.1c0-64-84.1-96-174.5-96zM491.4 7.252c-31.88-6.875-64.88-8.625-97.5-6.25-27.4 1.875-54.1 7.75-80.4 14.998L256 32v127.1c60.25 0 80 15.62 104.8 31.1 28.5 18.87 69.75 31.1 104.8 31.1 90.3 1.8 174.4-30.2 174.4-94.2 0-44.35-39.1-96.35-148.6-119.848z" />
  </svg>
);

const SvgShoePrintsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShoePrintsSolid;
