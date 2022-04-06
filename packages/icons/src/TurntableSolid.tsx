import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h448c35.38 0 64-28.62 64-64V96c0-35.37-28.6-64-64-64zM224 416c-88.38 0-160-71.63-160-160S135.63 96 224 96s160 71.63 160 160-71.6 160-160 160zm288-148.1c0 9.875-2.375 19.62-6.75 28.62l-19 37.75c8 4 11.12 13.62 7.25 21.5l-25.75 51.38c-3.875 7.875-13.5 11.12-21.5 7.125L417.8 400c-8-4-11.12-13.5-7.25-21.5l25.75-51.38c3.8-7.82 13.5-11.12 21.5-7.12l18.88-37.88c2.12-4.42 3.32-9.32 3.32-14.32V112c0-8.8 7.2-16 16-16s16 7.2 16 16v155.9zM224 224c-17.6 0-32 14.4-32 32s14.38 32 32 32 32-14.38 32-32-14.4-32-32-32z" />
  </svg>
);

const SvgTurntableSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurntableSolid;
