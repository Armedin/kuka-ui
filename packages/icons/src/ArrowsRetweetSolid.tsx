import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M630.6 297.4c-12.5-12.5-32.75-12.5-45.25 0L544 338.8V176c0-44.1-35.9-80-80-80H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c8.8 0 16 7.2 16 16v162.8l-41.38-41.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l96 96C495.6 444.9 503.8 448 512 448s16.37-3.125 22.62-9.375l96-96C643.1 330.1 643.1 309.9 630.6 297.4zM304 352H176c-8.8 0-16-7.2-16-16V173.3l41.38 41.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-96-96C144.4 67.13 136.2 64 128 64s-16.4 3.13-22.6 9.38l-96 96c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L96 173.3V336c0 44.1 35.9 80 80 80h128c17.67 0 32-14.31 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgArrowsRetweetSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsRetweetSolid;
