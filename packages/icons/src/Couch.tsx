import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 224c-35.35 0-64 28.65-64 64H128c0-35.35-28.65-64-64-64S0 252.65 0 288v160c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32h384c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V288c0-35.3-28.7-64-64-64zM96 448H32V288c0-17.64 14.36-32 32-32s32 14.36 32 32v160zm415.1-32h-384l.9-96h384l-.9 96zm96.9 32h-64V288c0-17.64 14.36-32 32-32s32 14.36 32 32v160zM80 192c8.84 0 16-7.2 16-16v-32c0-44.12 35.9-80 80-80h288c44.1 0 80 35.88 80 80v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-61.75-50.2-112-112-112H176C114.3 32 64 82.25 64 144v32c0 8.8 7.16 16 16 16z" />
  </svg>
);

const SvgCouch = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCouch;
