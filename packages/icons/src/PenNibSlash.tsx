import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.9 483.4c7 5.5 8.1 14.7 2.7 22.5-5.5 7-15.6 8.1-22.5 2.7L6.086 28.56C-.849 23.08-2.033 13.02 3.443 6.086 8.918-.849 18.98-2.033 25.91 3.443L633.9 483.4zM478.3 232.3l-12.8 46.9-27.3-21.6 7.9-28.9-98.8-98.8-52.7 14.3-31.2-24.6 80.3-21.92 75-75.05c25-24.995 65.6-24.995 90.6 0l44.1 44.12c25 24.99 25 65.55 0 90.55l-75.1 75zM374.6 112l89.4 89.4 66.7-66.8c12.5-12.5 12.5-32.7 0-45.23l-44.1-44.11c-12.5-12.5-32.7-12.5-45.2 0L374.6 112zm4.4 282.3 27.8 21.9c-6.2 4-13 7.2-20.2 9.3l-275.2 82.6c-12.28 3.7-25.62.3-34.71-8.8-9.09-9.1-12.46-22.4-8.76-34.7l76.57-255.4 27 21.3-64.8 216.2 110.2-110.2c-5.7-10.4-9.8-20.6-9.8-32.5 0-13.3 5-25.7 12-36l25.2 19.1c-2.7 5.6-5.2 11.1-5.2 16.9 0 17.7 15.2 32 32 32 9.4 0 17.2-3.3 22.9-8.8l25.3 20c-11.7 11.9-28.6 20.8-48.2 20.8-11 0-22.1-3.2-31.6-8.9L129.3 469.3l248.1-74.4c.5-.2 1.1-.4 1.6-.6z" />
  </svg>
);

const SvgPenNibSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenNibSlash;
