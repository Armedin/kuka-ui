import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M95.1 224v-.4l-63.52 276c-2.01 8.6-10.61 14-19.22 12-8.601-2-13.949-11.5-11.942-19.2L100.9 61.82C109.3 25.61 141.6 0 178.8 0H320c44.2 0 80 35.82 80 80v306c27.6 7.1 48 32.2 48 62 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-29.8 20.4-54.9 48-62V224H95.1zm83.7-192c-22.3 0-41.7 15.37-46.8 37.09L103.4 192H368V80c0-26.51-21.5-48-48-48H178.8zM384 480c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

const SvgWalker = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWalker;
