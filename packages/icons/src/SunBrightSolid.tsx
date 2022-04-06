import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M120.2 154.2c4.672 4.688 10.83 7.031 16.97 7.031s12.33-2.331 17.03-7.031c9.375-9.375 9.375-24.56 0-33.93l-45.3-45.3c-9.344-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l45.24 45.29zM256 112c13.25 0 24-10.75 24-24V24c0-13.25-10.7-24-24-24s-24 10.75-24 24v64c0 13.3 10.8 24 24 24zM112 256c0-13.25-10.75-24-24-24H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h64c13.3 0 24-10.7 24-24zm262.8-94.8c6.141 0 12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.94s-24.59-9.375-33.94 0l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.93 4.67 4.741 10.87 7.041 16.97 7.041zM256 400c-13.25 0-24 10.75-24 24v64c0 13.3 10.8 24 24 24s24-10.75 24-24v-64c0-13.2-10.7-24-24-24zm-135.8-42.2-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.94 4.688 4.688 10.83 7.031 16.97 7.031s12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.93s-24.54-9.41-33.94-.01zM488 232h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-96.2 125.8c-9.344-9.375-24.56-9.372-33.94.003s-9.375 24.56 0 33.93l45.25 45.28c4.672 4.688 10.83 7.031 16.97 7.031s12.28-2.344 16.97-7.03c9.375-9.376 9.375-24.56 0-33.94L391.8 357.8zM256 144c-61.9 0-112 50.1-112 112 0 61.86 50.14 112 112 112s112-50.14 112-112c0-61.9-50.1-112-112-112z" />
  </svg>
);

const SvgSunBrightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSunBrightSolid;
