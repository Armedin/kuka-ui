import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M445.5 51.78a31.965 31.965 0 0 0-17.32-17.32C424.3 32.85 420.2 32 416 32H288c-17.69 0-32 14.31-32 32s14.31 32 32 32h50.75L9.375 425.4c-12.5 12.5-12.5 32.75 0 45.25 12.49 12.49 32.74 12.51 45.25 0L384 141.3V192c0 17.69 14.31 32 32 32s32-14.31 32-32V64c0-4.16-.8-8.31-2.5-12.22zM156.1 233.4l45.25-45.25L54.63 41.38c-12.5-12.5-32.75-12.5-45.25 0-12.49 12.49-12.51 32.74 0 45.25L156.1 233.4zM416 288c-17.69 0-32 14.31-32 32v50.75l-92.13-92.13-45.25 45.25L338.8 416H288c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c4.164 0 8.312-.848 12.22-2.461a31.968 31.968 0 0 0 17.32-17.32C447.2 456.3 448 452.2 448 448V320c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgArrowsCrossSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsCrossSolid;
