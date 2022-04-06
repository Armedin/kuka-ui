import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M138.6 83.31C167.8 51.76 209.6 32 256 32c59.3 0 111 32.25 138.7 80.2C409.9 101.1 428.3 96 448 96c53 0 96 42.1 96 96 0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 36.6-15.4 69.6-40.9 92.1l31.7 25c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.197 42.89C-1.236 34.71-3.064 19.63 5.113 9.196 13.29-1.236 28.37-3.065 38.81 5.112L138.6 83.31zM97.17 172.6 487.4 480H144C64.47 480 0 415.5 0 336c0-62.8 40.17-116.2 96.2-135.9-.13-2.7-.2-5.4-.2-8.1 0-6.6.4-13.1 1.17-19.4z" />
  </svg>
);

const SvgCloudSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudSlashSolid;
