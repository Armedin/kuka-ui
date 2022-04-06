import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C114.6 32 .027 125.1.027 240c0 49.63 21.35 94.98 56.97 130.7C44.5 421.1 2.73 466 2.23 466.5c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm-96 96c17.67 0 32 14.33 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm254.3 183.2a16 16 0 0 1-14.29 8.803h-288c-6.277 0-11.98-3.672-14.57-9.389S95.82 298.2 99.96 293.5l56-64a15.995 15.995 0 0 1 24.08 0l22.71 25.95 77.73-104.9a16.002 16.002 0 0 1 12.86-6.477c5.068 0 9.838 2.402 12.86 6.477l106.7 144c3.6 4.75 4.1 11.25 1.4 16.65z" />
  </svg>
);

const SvgCommentImageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentImageSolid;
