import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 336V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1 0-11.72-6.607-21.52-16-27.1v-81.36c9.8-9.64 16-22.24 16-36.44zM149.8 109.1c24-20 59.75-16.38 81.63 5.75l8.57 8.75 8.625-8.75c22-22.12 57.63-25.75 81.63-5.75 27.5 23 28.88 64.13 4.25 89.13l-84.75 85.5c-5.5 5.5-14.25 5.5-19.75 0l-84.75-85.5C120.8 173.3 122.3 132.1 149.8 109.1zM384 448H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h288v64z" />
  </svg>
);

const SvgBookHeartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookHeartSolid;
