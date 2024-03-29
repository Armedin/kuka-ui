import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm258 80c12.2 0 22 9.8 22 21.1 0 8.6-4.9 15.7-10.7 19.7l-57.6 34.6c-7.3 4.4-11.7 12.2-11.7 20.6v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-2.4l46-28.5c21.1-11.8 34-34.6 34-60 0-37.8-31.3-70-70-70h-58c-35.3 0-64 29.6-64 64v8c0 14.2 10.7 24 24 24s24-9.8 24-24v-8c0-7.9 7.2-16 16-16l58 .9zm-34 224c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM72 80c-13.25 0-24 10.75-24 24 0 13.3 10.75 24 24 24s24-10.7 24-24c0-13.25-10.75-24-24-24zm304 48c13.3 0 24-10.7 24-24 0-13.25-10.7-24-24-24s-24 10.75-24 24c0 13.3 10.7 24 24 24zM72 384c-13.25 0-24 10.7-24 24s10.75 24 24 24 24-10.7 24-24-10.75-24-24-24zm304 48c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24z" />
  </svg>
);

const SvgBlockQuestionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlockQuestionSolid;
