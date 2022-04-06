import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 96H96c-17.67 0-32 14.3-32 32v256c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V128c0-17.7-14.3-32-32-32zM136 384H96V272h40v112zm0-144H96V128h40v112zm72 144h-40V272h40v112zm0-144h-40V128h40v112zm72 144h-40V272h40v112zm0-144h-40V128h40v112zm72 144h-40V272h40v112zm0-144h-40V128h40v112zm32-208H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgGrate = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGrate;
