import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m384 288 64-192H338.6c-30.2 0-57-19.34-66.6-48-9.6-28.67-36.4-48-66.6-48H64l64 288h256zM0 480c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-64H0v64zm480-256h-40.94l-21.33 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h15.22L81 224H32c-17.67 0-32 14.3-32 32v128h512V256c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgBoxTissueSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxTissueSolid;