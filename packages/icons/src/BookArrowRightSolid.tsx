import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M224 208c0-13.26 10.75-24 24-24h200V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.7 0 32-14.3 32-32.9 0-11.72-6.607-21.52-16-27.1v-81.36c9.8-7.84 16-20.44 16-34.64V232H248c-13.3 0-24-10.7-24-24zm160 240H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h288v64zm248.1-257-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L558.1 184H448v48h110.1l-39.03 39.03C514.3 275.7 512 281.8 512 288s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97z" />
  </svg>
);

const SvgBookArrowRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookArrowRightSolid;
