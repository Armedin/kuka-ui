import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 31.1C114.6 31.1.9 124.23.9 239.1c0 49.62 21.35 94.98 56.97 130.7-12.5 50.38-54.27 95.27-54.77 95.77-2.25 2.25-2.875 5.734-1.5 8.734 1.25 3 4.021 4.766 7.271 4.766 66.25 0 115.1-31.76 140.6-51.39 32.63 12.25 69.02 19.39 107.4 19.39 141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zm90.2 168.5-96 112c-4.3 5.1-10.6 8.1-17.3 7.5h-.9a24.04 24.04 0 0 1-16.97-7.031l-48-48c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l29.69 29.69 79.13-92.34c8.656-10.06 23.81-11.19 33.84-2.594C353.7 174.4 354.8 189.5 346.2 199.6z" />
  </svg>
);

const SvgCommentCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentCheckSolid;
