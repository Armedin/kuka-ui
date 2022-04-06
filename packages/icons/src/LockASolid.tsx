import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m224 307.8 30.1 60.2h-60.2l30.1-60.2zM224 0c79.5 0 144 64.47 144 144v48h16c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h16v-48C80 64.47 144.5 0 224 0zm0 64c-44.2 0-80 35.82-80 80v48h160v-48c0-44.18-35.8-80-80-80zm-87.2 382.3c7.9 4 17.6.8 21.5-7.1l19.6-39.2h92.2l19.6 39.2c3.9 7.9 13.6 11.1 21.5 7.1 7.9-3.9 11.1-13.6 7.1-21.5l-79.9-160.7c-.8-.7-1.8-3-3.1-3.4-1.4-1.5-3.1-2.6-4.9-3.4-2.1-.9-4.3-2.2-6.4-2.2-2.1 0-4.3 1.3-6.4 2.2-1.8.8-3.5 2-5 3.4-1.2.4-2.2 2.7-3 3.4l-79.9 160.7c-4 7.9-.8 17.6 7.1 21.5z" />
  </svg>
);

const SvgLockASolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLockASolid;
