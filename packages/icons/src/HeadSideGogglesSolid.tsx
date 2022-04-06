import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M303.1 64H415l.06 160h-107.5c-41.75 0-79.88-30.12-84.13-71.75C219.6 104.4 257.1 64 303.1 64zm208 144V80c0-8.875-7.125-16-15.1-16h-47.1v160H496c8.9 0 15.1-7.1 15.1-16zm-318.5-52.5c-3.2-31.6 7.1-63.25 27.5-86.62 22-23.38 52.3-36.88 83-36.88h72.25c-32.37-20.38-70.24-32-110.1-32H223.1C139.6 0 68.6 53.5 42.2 128H15.08C7.125 128 0 135.1 0 144v32c0 8.9 7.125 16 15.1 16h187.5c-4.7-11.2-8.7-23.5-10-36.5zM501.5 256h-193c-31.12 0-59.62-12.38-80.87-32H34.1c7.375 43.75 29.38 82.5 60.1 110.9V512h223.1l.002-64h63.99c35.37 0 63.1-28.62 63.1-63.1V320h31.1c23.12 0 38.62-23.88 29.25-45 1.958-5.5-.642-12-3.242-19z" />
  </svg>
);

const SvgHeadSideGogglesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeadSideGogglesSolid;
