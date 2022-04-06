import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m183.8 197.1 72.2 96.3c7.3-3.5 15.4-5.4 24-5.4h80c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-80c-30.9 0-56-25.1-56-56v-80c0-10.7 2.1-20.6 8.2-29.1l-73.1-96.3c-6.4 3.5-14.5 5.4-23.1 5.4H56c-30.93 0-56-25.1-56-56V88c0-30.93 25.07-56 56-56h80c30.9 0 56 25.07 56 56v24h192V88c0-30.93 25.1-56 56-56h80c30.9 0 56 25.07 56 56v80c0 30.9-25.1 56-56 56h-80c-30.9 0-56-25.1-56-56v-24H192v24c0 10.7-3 20.6-8.2 29.1zM136 64H56c-13.25 0-24 10.75-24 24v80c0 13.3 10.75 24 24 24h80c13.3 0 24-10.7 24-24V88c0-13.25-10.7-24-24-24zm304 128h80c13.3 0 24-10.7 24-24V88c0-13.25-10.7-24-24-24h-80c-13.3 0-24 10.75-24 24v80c0 13.3 10.7 24 24 24zm-80 128h-80c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24z" />
  </svg>
);

const SvgDiagramProject = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramProject;