import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 31.1C114.6 31.1.9 124.23.9 239.1c0 47.62 19.91 91.25 52.91 126.3-14.87 39.5-45.87 72.88-46.37 73.25-6.623 7-8.372 17.25-4.624 26C5.817 474.3 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25 28.1 9 60.16 14.25 92.9 14.25 141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zm0 384.9c-28.25 0-56.24-4.25-83.24-12.75a31.655 31.655 0 0 0-28.07 4.338c-22.1 16.25-58.54 35.29-102.7 39.66 12-15.12 29.75-40.5 40.75-69.63l.129-.34c4.283-11.27 1.789-23.1-6.43-32.82C47.51 313.1 32.06 277.6 32.06 240c0-97 100.5-176 223.1-176s223.1 79 223.1 176S379.5 416 256 416zm68.7-240.7-95.4 95.4-42-42c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l53.33 53.34a15.987 15.987 0 0 0 22.62 0l106.7-106.7c6.25-6.25 6.25-16.38 0-22.62s-16.43-6.24-22.63-.04z" />
  </svg>
);

const SvgCommentCheck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentCheck;
