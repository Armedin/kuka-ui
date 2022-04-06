import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 0H16C7.199 0 0 7.199 0 16c0 8.8 7.199 16 16 16h416c8.8 0 16-7.2 16-16 0-8.801-7.2-16-16-16zM224 96c-88.4 0-160 71.6-160 160v96c0 88.38 71.63 160 160 160s160-71.6 160-160v-96c0-88.4-71.6-160-160-160zm128 256c0 70.75-57.25 128-128 128S96 422.75 96 352v-96c0-70.75 57.25-127.1 128-127.1S352 185.3 352 256v96z" />
  </svg>
);

const SvgOverline = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOverline;
