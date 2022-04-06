import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.9 483.4c7 5.5 8.1 14.7 2.7 22.5-5.5 7-15.6 8.1-22.5 2.7L6.086 28.56C-.849 23.08-2.033 13.02 3.443 6.086 8.918-.849 18.98-2.033 25.91 3.443L633.9 483.4zM544 336c0 4.9-.4 9.7-1.3 14.3L512 326V176c0-26.5-21.5-48-48-48H261.2l-40.6-32H464c44.2 0 80 35.8 80 80v160zM50.53 124.8l25.13 19.8C68.39 153.1 64 164 64 176v160c0 26.5 21.49 48 48 48h266.8l40.6 32H112c-44.18 0-80-35.8-80-80V176c0-19.5 6.96-37.3 18.53-51.2zM592 192c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16z" />
  </svg>
);

const SvgBatterySlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBatterySlash;
