import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C114.6 32 .027 125.1.027 240c0 49.63 21.35 94.98 56.97 130.7C44.5 421.1 2.73 466 2.23 466.5c-2.25 2.25-2.875 5.734-1.5 8.734C1.978 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm96.1 224.1c-3.8 5.6-9.9 7.9-16.1 7.9s-12.28-2.344-16.97-7.031L280 217.9V320c0 13.25-10.75 24-24 24s-24-10.7-24-24V217.9l-39.9 38.2c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.375-9.375 24.56-9.375 33.94 0l80 80c10.2 10.24 10.2 25.44 0 33.94z" />
  </svg>
);

const SvgCommentArrowUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentArrowUpSolid;
