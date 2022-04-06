import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M368 288H31.1C14.33 288 0 302.3 0 319.1S14.33 352 31.1 352h32l.9 112c0 26.5 21.49 48 48 48h256c26.51 0 48-21.49 48-48V336c0-26.5-21.5-48-48-48zM352 0c-48.6 0-90.2 27.38-112 67.25C218.3 27.38 176.6 0 128 0 57.25 0 0 57.25 0 128s57.23 127.1 127.1 127.1l224.9.9c70.75 0 128-57.25 128-128S422.8 0 352 0zM128 192c-35.38 0-64-28.62-64-64s28.62-64 64-64 64 28.62 64 64-28.6 64-64 64zm224 0c-35.38 0-64-28.62-64-64s28.62-64 64-64 64 28.62 64 64-28.6 64-64 64zm172.8 70.5L448 320v128l76.76 57.54C545.9 521.4 576 506.3 576 479.9V288c0-26.3-30.1-41.4-51.2-25.5z" />
  </svg>
);

const SvgCameraMovieSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCameraMovieSolid;
