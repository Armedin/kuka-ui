import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M219.9 189.3c5.9 6.6 5.4 15.8-1.2 22.6l-49 44.1H240c44.2 0 80 35.8 80 80v40c0 8.8-7.2 16-16 16s-16-7.2-16-16v-40c0-26.5-21.5-48-48-48h-70.3l49 44.1c6.6 5.9 7.1 16 1.2 22.6-6.8 6.6-16 7.1-22.6 1.2l-80-72c-3.4-3-5.3-7.4-5.3-12.8 0-3.6 1.9-8 5.3-11l80-72c6.6-5.9 15.8-5.4 22.6 1.2zm90.2-166.74L336.9 64H432c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v336c0 44.2-35.8 80-80 80H112c-44.18 0-80-35.8-80-80V96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56zM148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6c-5.5 0-10.6 2.84-13.5 7.52L148.9 64zM64 432c0 26.5 21.49 48 48 48h224c26.5 0 48-21.5 48-48V96H64v336z" />
  </svg>
);

const SvgTrashCanUndo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrashCanUndo;
