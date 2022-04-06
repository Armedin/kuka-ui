import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 31.1C114.6 31.1.9 124.23.9 239.1c0 47.63 19.91 91.25 52.91 126.3-14.87 39.5-45.87 72.88-46.37 73.25-6.623 7-8.373 17.25-4.623 26C5.816 474.3 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25 28.1 9 60.16 14.25 92.9 14.25 141.4 0 255.1-93.13 255.1-208S397.4 31.1 256 31.1zm0 384.9c-28.25 0-56.24-4.25-83.24-12.75a31.656 31.656 0 0 0-28.07 4.338c-22.1 16.25-58.54 35.29-102.7 39.66 11.1-15.12 29.75-40.5 40.74-69.63l.129-.34c4.283-11.27 1.79-23.1-6.43-32.82C47.51 313.1 32.06 277.6 32.06 240c0-97 100.5-176 223.1-176 123.5 0 223.1 79 223.1 176S379.5 416 256 416zm75.3-251.3c-6.25-6.25-16.38-6.25-22.62 0L256 217.4l-52.7-52.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L233.4 240l-52.7 52.7c-6.25 6.25-6.25 16.38 0 22.62 6.242 6.246 16.37 6.254 22.62 0L256 262.6l52.69 52.69c6.242 6.246 16.37 6.254 22.62 0 6.25-6.25 6.25-16.38 0-22.62L278.6 240l52.69-52.69c6.31-6.21 6.31-16.41.01-22.61z" />
  </svg>
);

const SvgCommentXmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentXmark;
