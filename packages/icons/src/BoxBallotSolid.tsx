import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 464c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48V352H0v112zM448 24c0-13.26-10.7-24-24-24H152c-13.3 0-24 10.74-24 24v200h320V24zm96 136h-64v64c0 17.67-14.33 32-32 32H128c-17.7 0-32-14.3-32-32v-64H32c-17.67 0-32 14.3-32 32v127.1l.875.9h574.3l.825-.9V192c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgBoxBallotSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxBallotSolid;
