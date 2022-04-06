import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C114.6 32 .027 125.1.027 240c0 49.63 21.35 94.98 56.97 130.7-12.5 50.37-54.27 95.27-54.77 95.77-2.25 2.25-2.875 5.734-1.5 8.734C1.98 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z" />
  </svg>
);

const SvgCommentSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentSolid;