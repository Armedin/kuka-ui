import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M455.1 464h-72l-16-48h39.99l-81.65-64H95.1V171.5l-64-50.2V368c0 26.5 21.5 48 47.1 48h191.1l-16 48h-70.2c-13.25 0-24 10.75-24 24s10.75 24 24 24h271.1c13.25 0 24-10.75 24-24s-9-24-23.1-24zm175.7 5.1-68.1-53.38c25.21-1.434 45.29-22.16 45.29-47.73v-320c0-26.5-21.5-48-48-48H80.89c-12.3 0-23.41 4.77-31.9 12.38L38.81 5.113A23.964 23.964 0 0 0 24.03 0C16.905 0 9.84 3.16 5.12 9.191c-8.187 10.44-6.37 25.53 4.068 33.7L601.2 506.9c10.5 8.203 25.57 6.328 33.69-4.078 8.21-10.422 6.31-25.522-4.09-33.722zM543.1 352h-62.59L113.01 64h430l.09 288z" />
  </svg>
);

const SvgDisplaySlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDisplaySlashSolid;
