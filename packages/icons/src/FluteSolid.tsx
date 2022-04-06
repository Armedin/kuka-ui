import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 192v128c0 17.62 14.38 32 32 32h64V160H32c-17.62 0-32 14.4-32 32zm608-32H128v192h480c17.62 0 32-14.38 32-32V192c0-17.6-14.4-32-32-32zM320 280c-13.2 0-24-10.7-24-24s10.8-24 24-24 24 10.8 24 24-10.7 24-24 24zm96 0c-13.25 0-24-10.75-24-24s10.8-24 24-24 24 10.8 24 24-10.7 24-24 24zm96 0c-13.25 0-24-10.75-24-24s10.8-24 24-24 24 10.8 24 24-10.7 24-24 24z" />
  </svg>
);

const SvgFluteSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFluteSolid;
