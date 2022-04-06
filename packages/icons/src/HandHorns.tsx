import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M360 64c-30.88 0-56 25.12-56 56v61.62c-7.3-3.52-15.4-5.62-24-5.62-12.16 0-23.35 4.002-32.54 10.62C237.6 170.7 220.1 160 200 160c-8.6 0-16.7 2.1-24 5.6V56c0-30.88-25.1-56-56-56S64 25.12 64 56v210.2c-27.93 7.3-48 32.7-48 61.8v64c0 19.89 9 38.3 24.72 50.52l46.03 35.81C114.7 500 149.6 512 184.9 512H264c83.81 0 152-68.19 152-152V120c0-30.87-25.1-56-56-56zm-80 144c13.22 0 24 10.77 24 24v96c0 13.23-10.78 24-24 24s-24-10.8-24-24v-96c0-13.2 10.8-24 24-24zm-80-16c13.2 0 24 10.8 24 24v32.99c-9.7-5.69-20.9-8.89-32.5-8.89-4.243 0-8.548.431-12.87 1.334L176 241.1V216c0-13.2 10.8-24 24-24zM120 32c13.2 0 24 10.77 24 24v192.8l-48 10.3V56c0-13.23 10.8-24 24-24zm264 328c0 66.17-53.84 120-120 120h-79.1c-28.28 0-56.19-9.562-78.56-26.94l-46.03-35.8C52.63 411.3 48 401.8 48 392v-64c0-15 10.62-28.16 25.28-31.3l111.9-23.98a32.369 32.369 0 0 1 6.55-.671c15.81 0 32.23 12.47 32.23 31.99 0 14.75-10.29 28.04-25.28 31.26l-74.06 15.86c-7.528 1.603-12.67 8.24-12.67 15.63 0 9.602 8.066 16.03 16 16.03 1.112 0 2.236-.12 3.355-.372l74.06-15.86c9.676-2.076 18.22-6.408 25.56-12.1C240.5 371.1 258.8 384 280 384c30.88 0 56-25.12 56-56v-96c0-1.824-.367-3.547-.54-5.326.14-.874.54-1.774.54-2.674V120c0-13.2 10.8-24 24-24s24 10.8 24 24v240z" />
  </svg>
);

const SvgHandHorns = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandHorns;
