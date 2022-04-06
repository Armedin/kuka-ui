import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C114.6 32 .027 125.1.027 240c0 49.63 21.35 94.98 56.97 130.7C44.5 421.1 2.73 466 2.23 466.5c-2.25 2.25-2.875 5.734-1.5 8.734C1.978 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm96.1 224.1-80 80c-9.375 9.375-24.56 9.375-33.94 0l-80-80c-9.375-9.375-9.375-24.56 0-33.94C163.7 218.3 169.8 216 176 216s12.28 2.344 16.97 7.031L232 262.1V160c0-13.25 10.75-24 24-24s24 10.8 24 24v102.1l39.03-39.03c9.375-9.375 24.56-9.375 33.94 0s9.33 24.53-.87 33.03z" />
  </svg>
);

const SvgCommentArrowDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentArrowDownSolid;
