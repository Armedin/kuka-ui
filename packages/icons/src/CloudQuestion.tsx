import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M232.7 201.8c6.5-24.6 28.7-41.8 54.2-41.8H344c35.5 0 64 29 64 64.3 0 24-13.4 46.2-34.9 57.1L336 300.3V320c0 8.8-7.2 16-16 16s-16-7.2-16-16v-29.5c0-6 3.4-11.5 8.7-14.2l45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.6 0-17.8-14.4-32.3-32-32.3h-57.1c-11.8 0-20.5 7.4-23.2 17.9l-.2.7c-2.3 8.5-11 13.7-19.6 11.4-8.5-2.2-13.6-11-11.4-19.5l.2-.7zM344 384c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM272 32c59.5 0 112.1 29.55 144 74.8 14.5-6.93 30.8-10.8 48-10.8 61.9 0 112 50.1 112 112 0 10.7-1.5 20.1-4.3 30.8C612.3 260.2 640 302.9 640 352c0 70.7-57.3 128-128 128H144C64.47 480 0 415.5 0 336c0-62.8 40.15-116.1 96.17-135.9C100.3 106.6 177.4 32 272 32zm0 32c-77.4 0-140.5 61-143.9 137.5-.5 13.1-9 23.6-21.3 28.8C63.18 245.7 32 287.2 32 336c0 61.9 50.14 112 112 112h368c53 0 96-43 96-96 0-36.8-20.7-68.8-51.2-84.9-13.4-8-20-22.6-15.9-38 2-6.1 3.1-13.4 3.1-21.1 0-44.2-35.8-80-80-80-12.3 0-23.9 2.8-34.3 7.7-14 6.7-30.9 2.2-39.9-10.5C363.7 88.12 320.7 64 272 64z" />
  </svg>
);

const SvgCloudQuestion = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudQuestion;