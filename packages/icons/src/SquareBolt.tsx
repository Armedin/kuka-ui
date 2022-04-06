import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M301.4 122.7 269.8 224h60.7c11.9 0 21.5 9.6 21.5 21.5 0 6.1-2.6 11.9-7.1 16L180 410.7c-3.7 3.4-8.7 5.3-13.8 5.3-13.9 0-23.8-13.5-19.6-26.7L178.2 288h-61.3c-11.5 0-20.9-9.4-20.9-20.9 0-5.9 2.48-11.5 6.8-15.5l165.1-150.2c3.8-3.49 8.7-5.4 13.9-5.4 13.9 0 23.8 13.5 19.6 26.7zM200 256c5.1 0 9.9 2.4 12.9 6.5s3.9 9.4 2.4 14.3l-25.7 82.1L303.3 256H248c-5.1 0-9.9-2.4-12.9-6.5s-3.9-9.4-2.4-14.3l25.6-81.8L145.5 256H200zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32z" />
  </svg>
);

const SvgSquareBolt = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareBolt;
