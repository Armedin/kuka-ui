import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M592 0H48c-8.75 0-16 7.25-16 16v64c0 8.75 7.25 16 16 16h544c8.8 0 16-7.25 16-16V16c0-8.75-7.2-16-16-16zM64 512h96V352c0-88.37 71.63-160 160-160s160 71.63 160 160v160h96V128H64v384zm278.3-200.4c-14-18.8-31.4-37.8-51-55.6-50.5 45.63-86.5 105-86.5 140.8 0 63.6 51.6 115.2 115.2 115.2s115.3-51.63 115.3-115.3c0-26.5-26.75-81.5-64-115.1-10.8 9.7-20.5 19.8-29 30zm15.5 136.9c-10.5 7.8-23.7 12.3-37.8 12.3-35.25 0-64-24.38-64-64 0-19.62 11.88-37 35.63-66.75 3.375 4.124 48.25 64.12 48.25 64.12l28.75-34.25c2 3.5 3.875 6.875 5.5 10.25 13.37 26.63 7.77 60.73-16.33 78.33z" />
  </svg>
);

const SvgFireplaceSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFireplaceSolid;
