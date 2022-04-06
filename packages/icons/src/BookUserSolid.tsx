import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 336V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1 0-11.72-6.607-21.52-16-27.1v-81.36c9.8-9.64 16-22.24 16-36.44zM240 64c35.35 0 64 28.66 64 64s-28.65 64-64 64c-35.34 0-64-28.66-64-64s28.7-64 64-64zm-32 160h64c44.2 0 80 35.8 80 80 0 8.836-7.164 16-16 16H144c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm176 224H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h288v64z" />
  </svg>
);

const SvgBookUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookUserSolid;
