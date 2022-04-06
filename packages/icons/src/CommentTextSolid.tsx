import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 31.1C114.6 31.1.9 124.23.9 239.1c0 49.62 21.35 94.98 56.97 130.7-12.5 50.38-54.27 95.27-54.77 95.77-2.25 2.25-2.875 5.734-1.5 8.734 1.25 3 4.021 4.766 7.271 4.766 66.25 0 115.1-31.76 140.6-51.39 32.63 12.25 69.03 19.39 107.4 19.39 141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM328 208h-48v104c0 13.25-10.75 23.1-24 23.1s-24-9.8-24-23.1V208h-48c-13.2 0-24-10.8-24-24.9s10.8-23.1 24-23.1h144c13.3 0 24 10.7 24 23.1S341.3 208 328 208z" />
  </svg>
);

const SvgCommentTextSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentTextSolid;
