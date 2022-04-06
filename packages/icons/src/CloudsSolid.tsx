import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M544 320c-.625 0-1.125.25-1.625.25C543.5 315 544 309.6 544 304c0-44.2-35.8-80-80-80-24.62 0-46.25 11.25-61 28.75C384.4 216.9 347.2 192 304 192c-61.9 0-112 50.1-112 112 0 7.25.75 14.25 2.125 21.25C155.8 337.8 128 373.5 128 416c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96zM304 160c40.75 0 78.63 17.25 105.4 46.5 9.875-5.625 20.5-9.375 31.62-11.75C445.2 183.9 448 172.4 448 160c0-53-43-96-96-96-14.12 0-27.38 3.25-39.5 8.75C296.6 30.25 256 0 208 0 151.6 0 105.2 41.88 97.62 96.25c-.5 0-1-.25-1.62-.25-53 0-96 43-96 96s43 96 96 96h65.62C169.8 216.2 230.1 160 304 160z" />
  </svg>
);

const SvgCloudsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudsSolid;
