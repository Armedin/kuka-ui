import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 32c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm31.6 415.6c-80.2 0-147.5-59-158.2-136h158.2c13.3 0 24-10.7 24-24 0-13.2-10.7-24-24-24H129.4c10.7-77 78-136 158.2-136 87.5 0 160 71.6 160 160 0 87.5-72.5 160-160 160zM576 288c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM0 288c0-17.7 14.33-32 32-32s32 14.3 32 32-14.33 32-32 32-32-14.3-32-32zM128 96c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32 17.7 0 32 14.33 32 32zm320 0c0-17.67 14.3-32 32-32s32 14.33 32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32zM128 480c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32s14.33-32 32-32c17.7 0 32 14.3 32 32zm320 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
  </svg>
);

const SvgDialLowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDialLowSolid;
