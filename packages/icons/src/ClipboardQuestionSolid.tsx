import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M282.5 64H320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h37.5C114.6 26.71 150.2 0 192 0s77.4 26.71 90.5 64zM192 128c17.7 0 32-14.3 32-32 0-17.67-14.3-32-32-32s-32 14.33-32 32c0 17.7 14.3 32 32 32zm-86.6 102.5c-4.5 12.5 2.1 26.2 13.7 30.7 13.4 4.4 27.1-2.1 31.5-14.6l.5-1.3c1.1-3.2 4.1-5.3 7.5-5.3h58.3c8.3 0 15.1 6.8 15.1 15.1 0 5.5-2.9 10.5-7.6 13.2l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8V328c0 13.3 10.7 24 24 24 13.1 0 23.8-10.5 23.1-23.6l33.2-18.5c19.6-11.2 31.7-32.1 31.7-54.8 0-34.8-28.3-63.1-63.1-63.1h-58.3c-23.7 0-44.8 14.9-52.8 37.3l-.4 1.2zM192 384c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgClipboardQuestionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClipboardQuestionSolid;
