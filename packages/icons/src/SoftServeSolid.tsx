import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 128c0 11.8-3.2 22.9-8.8 32.4 32 2.7 56.8 30.7 56.8 63.6 0 35.3-28.7 64-64 64H80c-35.35 0-64-28.7-64-64 0-32.9 24.84-60.9 56.8-63.6-5.59-9.5-8.8-20.6-8.8-32.4 0-35.35 28.65-64 64-64h46.1c18.7 0 33.9-15.2 33.9-33.94 0-9-3.6-17.64-9.9-24.001L192 0c70.7 0 128 57.31 128 128zM48 352v-32h288v32c0 17.7-14.3 32-32 32h-1.8l-11 99.5c-1.8 16.2-15.5 28.5-31.8 28.5H124.6c-16.3 0-29.96-12.3-31.76-28.5L81.78 384H80c-17.67 0-32-14.3-32-32z" />
  </svg>
);

const SvgSoftServeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSoftServeSolid;
