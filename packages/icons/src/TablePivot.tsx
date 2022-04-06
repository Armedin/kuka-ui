import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M443.3 283.3c-6.2 6.3-16.4 6.3-22.6 0l-4.7-4.7V336c0 26.5-21.5 48-48 48h-57.4l4.7 4.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-32-32c-6.3-6.2-6.3-16.4 0-22.6l32-32c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-4.7 4.7H368c8.8 0 16-7.2 16-16v-57.4l-4.7 4.7c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l32-32c6.2-6.3 16.4-6.3 22.6 0l32 32c6.3 6.2 6.3 16.4 0 22.6zM0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm32 0v64h96V64H64c-17.67 0-32 14.33-32 32zm0 96v224c0 17.7 14.33 32 32 32h64V192H32zm128 0v256h288c17.7 0 32-14.3 32-32V192H160zm320-32V96c0-17.67-14.3-32-32-32H160v96h320z" />
  </svg>
);

const SvgTablePivot = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTablePivot;
