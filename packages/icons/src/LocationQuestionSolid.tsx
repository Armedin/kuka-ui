import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zm-62.9-364.7c-4.5 12.5 2.1 26.2 13.7 30.7 13.4 4.4 27.1-2.1 31.5-14.6l.5-1.3c1.1-3.2 4.1-5.3 7.5-5.3h58.3c8.3 0 15.1 6.8 15.1 15.1 0 5.5-2.9 10.5-7.6 13.2l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8V232c0 13.3 10.7 24 24 24 13.1 0 23.8-10.5 23.1-23.6l33.2-18.5c19.6-11.2 31.7-32.1 31.7-54.8 0-34.8-28.3-63.1-63.1-63.1h-58.3c-23.7 0-44.8 14.9-52.8 37.3l-.4 1.2zM192 288c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgLocationQuestionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationQuestionSolid;
