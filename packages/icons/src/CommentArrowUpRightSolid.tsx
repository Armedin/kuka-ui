import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C114.6 32 .027 125.1.027 240c0 49.63 21.35 94.98 56.97 130.7C44.5 421.1 2.73 466 2.23 466.5c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zm80 248c0 13.25-10.75 24-24 24s-24-10.7-24-24v-54.1l-87.9 86.2c-9.381 9.381-24.56 9.375-33.94 0-9.375-9.375-9.375-24.56 0-33.94L254.1 192H200c-13.2 0-24-10.7-24-24s10.8-24 24-24h112c13.25 0 24 10.75 24 24v112z" />
  </svg>
);

const SvgCommentArrowUpRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentArrowUpRightSolid;
