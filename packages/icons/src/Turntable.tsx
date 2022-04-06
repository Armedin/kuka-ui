import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M224 232c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.7 24-24-10.7-24-24-24zM512 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h448c35.38 0 64-28.62 64-64V96c0-35.37-28.6-64-64-64zm32 384c0 17.62-14.38 32-32 32H64c-17.62 0-32-14.38-32-32V96c0-17.62 14.38-32 32-32h448c17.62 0 32 14.38 32 32v320zM224 96c-88.4 0-160 71.6-160 160s71.63 160 160 160 160-71.63 160-160S312.4 96 224 96zm0 288c-70.75 0-128-57.25-128-128s57.25-128 128-128 128 57.25 128 128c-.1 70.6-57.4 127.9-128 128zm260.5-79.5-4.5-2.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v176c-13.38-2.875-27.12 3.125-34 15l.5.25c-4.5 7.374-11.1 21.87-27.12 52.12-7.887 15.77-1.529 34.96 14.23 42.87l28.64 14.38c4.55 2.28 9.35 3.38 14.25 3.38 3.5 0 7-.5 10.25-1.625 8-2.625 14.62-8.5 18.5-16l25.62-50.88C506.8 331.6 500.4 312.4 484.5 304.5zM444.6 384 416 369.8s23.62-46.75 25.75-50.75l28.5 14.12L444.6 384z" />
  </svg>
);

const SvgTurntable = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurntable;