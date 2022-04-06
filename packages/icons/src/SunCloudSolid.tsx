import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 223.1c-12 0-23.12 3.5-32.75 9.25C539.8 192.2 505.9 159.1 464 159.1c-38.75 0-71.13 27.63-78.38 64.25-.5 0-1-.25-1.625-.25-35.25 0-64 28.75-64 64s28.75 64 64 64h192c35.25 0 64-28.75 64-64s-28.695-64-63.995-64zM325.3 363.4c-20 12.9-43.7 20.6-69.3 20.6-70.69 0-128-57.31-128-128s57.31-128 128-128c46.04 0 86.06 24.52 108.6 60.1 15.28-29.75 43.27-51.29 76.25-58.31l-50.44-9.115-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89 164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6 12.56 141.3c-10.927 1.9-16.156 14.6-9.824 22.8L65.89 256 2.74 347.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7 19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l21.47-115.5-8.2-.828c-22.2 0-42.4-7-58.7-19.7zm11.6-158.7C319.8 177.9 290.1 160 256 160c-53.02 0-96 42.98-96 96s42.98 96 96 96c17.21 0 33.13-4.896 47.1-12.83-9.4-14.87-15.1-32.37-15.1-52.07 0-34.9 19.8-65.9 48.9-82.4z" />
  </svg>
);

const SvgSunCloudSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSunCloudSolid;
